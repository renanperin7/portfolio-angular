import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemDialogComponent } from './imagem-dialog.component';

describe('ImagemDialogComponent', () => {
  let component: ImagemDialogComponent;
  let fixture: ComponentFixture<ImagemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
