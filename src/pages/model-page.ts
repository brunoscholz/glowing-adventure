//import { Injectable, ReflectiveInjector } from '@angular/core';
import { MockDataService } from '../providers/services/mockdata.service';
import { LoadingService } from '../providers/services/loading.service';

import { ViewStatusEnum, DisplayModeEnum } from '../providers/enums';
//import _ from 'underscore';

export class ModelPage {
  selectedItem: any;
  refresher: any;
  data: any;
  
  title: string;
  viewStatus = ViewStatusEnum;
  status: any;
  
  displayMode = DisplayModeEnum;
  display: any;

  constructor(private ttl: string, public dataService: MockDataService, public loadingService: LoadingService) {
    //let injector = ReflectiveInjector.resolveAndCreate([LoadingService]);
    this.loadingService = loadingService;//injector.get(LoadingService);

    this.doReset(ttl);
    this.status = ViewStatusEnum.Loading;
    this.display = DisplayModeEnum.Card;
  }

  doReset(ttl: string) {
    this.title = ttl;
    this.data = [];
    this.status = ViewStatusEnum.Loading;
    this.doToggleLoading(true);
  }

  doToggleLoading(l: boolean) {
    this.loadingService.toggleLoadingIndicator(l);
  }

  /*doRefresh(refresher) {
    this.refresher = refresher;
  }*/

  doQuery(query) {
    this.dataService.findAll(query);
  }

  doChangeView(st: ViewStatusEnum) {
    this.status = st;
  }

  doChangeDisplayMode(mode: DisplayModeEnum) {
    this.display = mode;
  }
}
