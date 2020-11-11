class YoutubeAxios {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // 인기 영상 12개를 받아온다.
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 12,
      },
    });
    return response.data.items;
  }

  // 메인에 띄울 인기 영상 10개를 받아온다.
  async mostPopularMain() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 10,
      },
    });
    return response.data.items;
  }

  // query에 입력되는 값으로 검색결과 상위권 12개를 받아온다
  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 12,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeAxios;
