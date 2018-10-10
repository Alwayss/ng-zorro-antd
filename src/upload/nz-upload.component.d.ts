import { EventEmitter, OnInit, OnChanges, SimpleChanges, SimpleChange, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NzLocaleService } from '../locale/index';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { UploadFile, UploadListType, ShowUploadListInterface, UploadChangeParam, UploadType, ZipButtonOptions, UploadFilter } from './interface';
export declare class NzUploadComponent implements OnInit, OnChanges, OnDestroy {
    private cd;
    private _locale;
    private inited;
    private progressTimer;
    /** @private */
    upload: NzUploadBtnComponent;
    nzType: UploadType;
    nzLimit: number;
    nzSize: number;
    nzFileType: string;
    nzAccept: string;
    nzAction: string;
    nzBeforeUpload: (file: UploadFile, fileList: UploadFile[]) => boolean | Observable<any>;
    nzCustomRequest: (item: any) => Subscription;
    nzData: {} | ((file: UploadFile) => {});
    nzFilter: UploadFilter[];
    nzFileList: UploadFile[];
    nzFileListChange: EventEmitter<UploadFile[]>;
    private _disabled;
    nzDisabled: boolean;
    nzHeaders: {};
    nzListType: UploadListType;
    private _multiple;
    nzMultiple: boolean;
    nzName: string;
    private _showUploadList;
    nzShowUploadList: boolean | ShowUploadListInterface;
    private _showBtn;
    nzShowButton: boolean;
    private _withCredentials;
    nzWithCredentials: boolean;
    nzRemove: (file: UploadFile) => boolean | Observable<boolean>;
    nzPreview: (file: UploadFile) => void;
    nzChange: EventEmitter<UploadChangeParam>;
    /** @private */
    _btnOptions: ZipButtonOptions;
    private zipOptions();
    constructor(cd: ChangeDetectorRef, _locale: NzLocaleService);
    private fileToObject(file);
    private getFileItem(file, fileList);
    private removeFileItem(file, fileList);
    private uploadErrorText;
    private genErr(file);
    private clearProgressTimer();
    private genPercentAdd();
    private autoUpdateProgress(file);
    private genThumb(file);
    private onStart;
    private onProgress;
    private onSuccess;
    private onError;
    private dragState;
    fileDrop(e: DragEvent): void;
    onRemove: (file: UploadFile) => void;
    _prefixCls: string;
    _classList: string[];
    _setClassMap(): void;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
