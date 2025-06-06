const { FilteringFlow } = filteringjs

const filtering = new FilteringFlow(document.querySelector('#crop-filtering'))
filtering.initializeParser({
  itemCheckedClass: 'active'
})