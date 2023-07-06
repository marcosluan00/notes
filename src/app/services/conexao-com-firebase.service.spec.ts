import { TestBed } from '@angular/core/testing';

import { ConexaoComFirebaseService } from './conexao-com-firebase.service';

describe('ConexaoComFirebaseService', () => {
  let service: ConexaoComFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoComFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
