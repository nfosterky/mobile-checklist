export default {
  main: 564,
  checklists: {
    564: [ 98, 99 ],
    573: [ 103, 992 ]
  },
  items: {
    98: {
      key: 98,
      title: 'Do the laundry',
      done: false,
      sublist: 573,
      parentListId: 564
    },
    99: {
      key: 99,
      title: 'Clean room',
      done: true,
      sublist: null,
      parentListId: 564
    },
    103: {
      key: 103,
      title: 'Wash laundry',
      done: true,
      sublist: null,
      parentListId: 573
    },
    992: {
      key: 992,
      title: 'Dry laundry',
      done: false,
      sublist: null,
      parentListId: 573
    }
  }
}