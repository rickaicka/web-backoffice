export class PaginationModel {

  constructor(
    public itemsPerPage: number,
    public totalItems: number,
    public currentPage: number
  ){}

  setPagingData(page: number) {
    (page - 1) * 10;
  }
}
