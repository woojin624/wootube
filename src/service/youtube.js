class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  // 인기 영상 12개를 받아온다.
  async mostPopular() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  // 메인에 띄울 인기 영상 10개를 받아온다.
  async mostPopularMain() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  // query에 입력되는 값으로 검색결과 상위권 12개를 받아온다
  async search(query) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async videoDetail(id) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=${id}&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  async channels(chId) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=${chId}&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }
}

export default Youtube;
