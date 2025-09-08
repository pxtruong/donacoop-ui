import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../../shared/constants/route.constant';
import { BasicExtends } from '../../../shared/models/basic-extends.model';
import { MaterialModule } from '../../../shared/modules/material/material-module';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { ISideNavItem } from '../../models/side-nav-model';

@Component({
  selector: 'core-side-nav',
  imports: [MaterialModule, RouterModule, TranslatePipe, CommonModule],
  templateUrl: './core-side-nav.html',
  styleUrl: './core-side-nav.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreSideNav extends BasicExtends {
  @ViewChild('sideNav') sideNav!: ElementRef<HTMLInputElement>;
  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  public isLoggedIn: boolean = true;
  public isLock: boolean = false;
  constructor() {
    super();
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  protected readonly shouldRun =
    /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  public navList: ISideNavItem[] = [
    {
      isDisabled: false,
      link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.FULL_PATH}`,
      label: 'Dữ Liệu Chính',
      icon: 'sticky_note_2',
      customClass: 'icon-white',
      children: [
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.COMPANY.FULL_PATH}`,
          label: 'Công Ty',
          icon: 'apartment',
          customClass: 'icon-white',
        },
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.USER.FULL_PATH}`,
          label: 'Nhân Sự',
          icon: 'supervisor_account',
          customClass: 'icon-white',
        },
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.TRUCKS.FULL_PATH}`,
          label: 'Danh Sách Xe Tải',
          icon: 'fire_truck',
          customClass: 'icon-white',
        },
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.MACHINERIES.FULL_PATH}`,
          label: 'Xe Cơ Giới',
          icon: 'precision_manufacturing',
          customClass: 'icon-white',
        },
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.WAREHOUSES.FULL_PATH}`,
          label: 'Kho',
          icon: 'store',
          customClass: 'icon-white',
        },
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.STONE_TYPE.FULL_PATH}`,
          label: 'Loại Đá',
          icon: 'dns',
          customClass: 'icon-white',
        },
        {
          isDisabled: false,
          link: `/${ROUTE_CONSTANTS.PAGE.MASTER_DATA.CHILDREN.POSITION.FULL_PATH}`,
          label: 'Chức Vụ',
          icon: 'assignment_ind',
          customClass: 'icon-white',
        },
      ],
    },
    {
      isDisabled: false,
      link: `/${ROUTE_CONSTANTS.PAGE.REGISTRATION_AND_ACTIVITIES.FULL_PATH}`,
      label: 'Danh Sách Xe Tải Đăng Ký và Theo Dõi',
      icon: 'no_crash',
      customClass: 'icon-white',
    },
    {
      isDisabled: false,
      link: `/${ROUTE_CONSTANTS.PAGE.KE_HOACH.FULL_PATH}`,
      label: 'Kế Hoạch',
      icon: 'assignment',
      customClass: 'icon-white',
    },
    // {
    //   isDisabled: false,
    //   link: `/${ROUTE_CONSTANTS.PAGE.THEO_DOI_HOAT_DONG.FULL_PATH}`,
    //   label: 'Theo Dõi Hoạt Động',
    //   icon: 'work_history',
    //   customClass: 'icon-white',
    // },
  ];

  onMouseEnter() {
    if (this.isLock) {
      return;
    }
    this._onMouseEnter();
  }

  private _onMouseEnter() {
    this.sideNav.nativeElement.classList.remove('short-nav');
    this.sideNav.nativeElement.classList.add('full-nav');
    document.body.classList.remove('short-nav');
    document.body.classList.add('full-nav');
  }

  onMouseLeave() {
    if (this.isLock) {
      return;
    }
    this._onMouseLeave();
  }

  private _onMouseLeave() {
    this.sideNav.nativeElement.classList.remove('full-nav');
    this.sideNav.nativeElement.classList.add('short-nav');
    document.body.classList.remove('full-nav');
    document.body.classList.add('short-nav');
  }

  lockOrUnlockNav() {
    this.isLock = !this.isLock;
    if (this.isLock) {
      if (this.sideNav.nativeElement.classList.contains('full-nav')) {
        this.sideNav.nativeElement.classList.remove('short-nav');
        document.body.classList.remove('short-nav');
      } else {
        this.sideNav.nativeElement.classList.add('full-nav');
        document.body.classList.add('full-nav');
      }
    }
  }
  childrenAccessor = (node: ISideNavItem) => node.children ?? [];

  hasChild = (_: number, node: ISideNavItem) =>
    !!node.children && node.children.length > 0;
  onClickExpand(node: ISideNavItem) {
    node.isExpand = !node.isExpand;
  }
}
