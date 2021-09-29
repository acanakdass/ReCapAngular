export interface Rental {
   id: number,
   brandName: string,
   customerFullName: string,
   rentDate: Date,
   returnDate: Date,
   car: {
      id: number,
      brandId: number,
      colorId: number,
      modelYear: number,
      dailyPrice: number,
      description: string
   }
}