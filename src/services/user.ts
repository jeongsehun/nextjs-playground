export default class User {
  static async Login(categoryId: number): Promise<string[]> {
    try {
      const data = await httpClient.get(`/category/${categoryId}/brands`);
      if (Array.isArray(data)) {
        // 한글자 짜리 브랜드는 너무 광범위하게 필터 되기때문에 2글자 이상만 넣는다.
        const MIN_BRAND_LENGTH = 2;
        return data.filter(b => b.length >= MIN_BRAND_LENGTH);
      }
      return [];
    } catch (e) {
      return [];
    }
  }
}
