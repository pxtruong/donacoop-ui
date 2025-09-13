export const ROUTE_CONSTANTS = {
  QUARRY: {
    PATH: 'quarry',
    MASTER_DATA: {
      PATH: 'master-data',
      FULL_PATH: 'page/master-data',
      CHILDREN: {
        COMPANY: {
          PATH: 'company',
          FULL_PATH: '/quarry/master-data/company',
        },
        USER: {
          PATH: 'user',
          FULL_PATH: '/quarry/master-data/user',
        },
        TRUCKS: {
          PATH: 'trucks',
          FULL_PATH: '/quarry/master-data/trucks',
        },
        MACHINERIES: {
          PATH: 'machineries',
          FULL_PATH: '/quarry/master-data/machineries',
        },
        WAREHOUSES: {
          PATH: 'warehouses',
          FULL_PATH: '/quarry/master-data/warehouses',
        },
        STONE_TYPE: {
          PATH: 'stone-type',
          FULL_PATH: '/quarry/master-data/stone-type',
        },
        POSITION: {
          PATH: 'position',
          FULL_PATH: '/quarry/master-data/position',
        },
      },
    },
    KE_HOACH: {
      PATH: 'ke-hoach',
      FULL_PATH: 'quarry/ke-hoach',
    },
    REGISTRATION_AND_ACTIVITIES: {
      PATH: 'danh-sach-xe-dang-ky-va-hoat-dong',
      FULL_PATH: 'quarry/danh-sach-xe-dang-ky-va-hoat-dong',
      CHILDREN: {
        THEO_DOI_HOAT_DONG: {
          PATH: 'theo-doi-hoat-dong',
          FULL_PATH:
            'quarry/danh-sach-xe-dang-ky-va-hoat-dong/theo-doi-hoat-dong',
        },
        DS_XE_TAI_DANG_KY: {
          PATH: 'danh-sach-xe-tai-dang-ky',
          FULL_PATH:
            'quarry/danh-sach-xe-dang-ky-va-hoat-dong/danh-sach-xe-tai-dang-ky',
        },
      },
    },
    SIMULATOR: {
      PATH: 'simulator',
      FULL_PATH: 'quarry/simulator',
    },
  },
};
