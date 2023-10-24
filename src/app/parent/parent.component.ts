import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
    standalone: true,
    imports: [ChildAComponent]
})
export class ParentComponent implements OnChanges,
                                        OnInit,
                                        DoCheck,
                                        AfterContentInit, AfterContentChecked,
                                        AfterViewInit, AfterViewChecked,
                                        OnDestroy {

  @Input({ required: true }) name = 'Parent';
  @ViewChild(ChildAComponent) childA!: ChildAComponent; // part of the view
  @ViewChild(ChildBComponent) childB!: ChildBComponent; // always undefined not a part of the view
  @ViewChildren(ChildAComponent) dirs!: QueryList<ChildAComponent>;

  @ContentChild(ChildAComponent) contentChildA!: ChildAComponent; // always undefined not a part of the content
  @ContentChild(ChildBComponent) contentChildB!: ChildBComponent; // part of the content
  @ContentChildren(ChildBComponent) cDirs!: QueryList<ChildBComponent>;

  ngOnChanges (changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    this.log();
  }

  log () {
    console.log('VIEW', this.childA?.title, this.childB?.title, this.dirs);
    console.log('CONTENT', this.contentChildA?.title, this.contentChildB?.title, this.cDirs);
  }

  ngOnInit () {
    console.log('ngOnInit');
    this.log();
  }

  ngDoCheck () {
    console.log('ngDoCheck');
    this.log();
  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit');
    this.log();
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked');
    this.log();
  }

  ngAfterViewInit () {
    console.log('ngAfterViewInit');
    this.log();
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked');
    this.log();
  }

  ngOnDestroy () {
    console.log('ngOnDestroy');
    this.log();
  }

  changeTitle () {
    this.name = Math.random() * 100 + this.name;
  }
}
