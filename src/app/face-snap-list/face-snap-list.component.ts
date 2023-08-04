import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    // this.faceSnaps = this.faceSnapsService.faceSnaps;
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(
      // take(20),
      tap(console.log),
      takeUntil(this.destroy$)
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
