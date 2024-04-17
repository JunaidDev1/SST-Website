import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataHelperService } from '../data-helper.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(
    private modalService: NgbModal,
    public dataHelper: DataHelperService,
    public toastr: ToastrService,
  ) { }

  openDeleteConfirmationModal(modalComponent: any, deletionItem: string, size?: string | undefined): Promise<any> {
    const modalRef = this.modalService.open(modalComponent, { size });
    modalRef.componentInstance.deletionItem = deletionItem;
    return this.openModal(modalRef);
  }

  openSharedModal(modalComponent: any, entity: string, dataObj: any, size?: string | undefined): Promise<any> {
    const modalRef = this.modalService.open(modalComponent, { size });
    modalRef.componentInstance[entity] = this.dataHelper.deepCloneData(dataObj);
    return this.openModal(modalRef);
  }

  openModal(modalRef: any): Promise<any> {
    return modalRef.result.then((result: any) => {
      return result;
    },
      ((reason: ModalDismissReasons) => {
        if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return null;
        }
      }));
  }

}
