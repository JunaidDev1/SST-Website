import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { HttpHelperService } from 'src/app/shared/http-helper.service';
import { iProduct } from 'src/app/shared/product';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() product: iProduct = new iProduct();
  imageFiles: { img: string, file: File }[] = [];
  existingImages: any[] = [];

  constructor(
    public httpHelper: HttpHelperService,
    public userAuth: UserAuthService,
    public apiService: ApiService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    public firebaseDb: AngularFireDatabase,
    private storage: AngularFireStorage,
    private dataHelper: DataHelperService,
  ) { }

  delteImage(i: number) {
    this.imageFiles.splice(i, 1);
  }

  ngOnInit(): void {
    this.populateFormFields();
  }

  populateFormFields() {
    if (this.product.imageUrls && this.product.imageUrls.length > 0) {
      this.imageFiles = this.product.imageUrls.map(url => ({ img: url, file: null }));
    }
  }

  onChangeFile(event: any) {
    let selectedFiles: FileList = event.target.files;
    if (selectedFiles.length > 0) {
      if (selectedFiles.length > 10) {
        window.Error('Please select a maximum of 10 images.');
      } else {
        let promises: Promise<any>[] = [];
        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i];
          promises.push(this.readFileAsync(file));
        }

        Promise.all(promises)
          .then((results) => {
            this.imageFiles.push(...results);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
    event.target.value = '';
  }

  readFileAsync(file: File): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ img: reader.result, file: file });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  submitFormData() {
    if (!this.imageFiles.length) {
      this.toastr.error('Please choose images!');
      return;
    }

    if (!this.product.title || !this.product.price || !this.product.description) {
      this.toastr.error('Missing required fields!');
      return;
    }

    if (!this.product.productId) {
      this.product.createdOn = Number(new Date());
      this.product.productId = this.firebaseDb.database.ref().child('products').push().key;
    }
    this.product.ownerId = this.userAuth.currentUser.uid;
    this.existingImages = this.imageFiles.filter(x => !x.file).map(x => x.img) ?? [];
    const newlySelectedImages = this.imageFiles.filter(x => x.file);
    newlySelectedImages.length ? this.uploadFile(newlySelectedImages) : this.saveProductOnFirebase();
  }

  uploadFile(selectedFiles: { img: string, file: File }[]) {
    const self = this;
    self.dataHelper.displayLoading = true;
    const uploadPromises: Promise<any>[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i].file;
      const fileName = self.getFileName(file);
      const uploadTask = this.storage.storage.ref(fileName).put(file);
      const uploadPromise = new Promise<any>((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            reject(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              resolve(url);
            });
          }
        );
      });
      uploadPromises.push(uploadPromise);
    }

    Promise.all(uploadPromises)
      .then((urls) => {
        console.log('Download URLs:', urls);
        this.existingImages = this.existingImages.concat(urls);
        this.saveProductOnFirebase();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  saveProductOnFirebase() {
    this.product.imageUrls = this.existingImages;
    const urlPath = `products/${this.product.productId}`;
    this.dataHelper.updateDataOnFirebase(urlPath, this.product)
      .then(() => {
        this.dataHelper.getAllProducts();
        this.toastr.success('Product saved successfully!');
        this.activeModal.close();
        this.dataHelper.displayLoading = false;
      });
  }

  getFileName(file: File): string {
    let fileName = file?.name || '';
    let fileType = fileName.split('.')[1];
    fileName = fileName.split('.')[0];
    fileName = fileName.split(' ').join('_');
    return `${fileName}_${Math.floor(Date.now() / 1000)}.${fileType}`;
  }

}