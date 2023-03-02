import React, { Component } from 'react';
import { AxiosApiService } from './services/services';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    totalHits: 0,
    isLoading: false,
    items: [],
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query) {
      this.getItems();
    }

    if (page !== prevState.page) {
      this.getItems();
    }
  }

  getItems = async () => {
    const { query, page, items } = this.state;

    try {
      this.setState({ isLoading: true });
      const responseData = await AxiosApiService(query, page);
      const hits = responseData.length;

      this.setState({ totalHits: hits });

      const filteredData = responseData.map(item => {
        const { id, webformatURL, largeImageURL } = item;
        const itemData = { id, webformatURL, largeImageURL };
        return itemData;
      });

      this.setState({
        items: [...items, ...filteredData],
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  handleSubmit = e => {
    const inputValue = e.target.elements[1].value.trim();

    e.preventDefault();
    this.setState({
      page: 1,
      query: inputValue,
      items: [],
    });
    if (inputValue !== '') {
      this.setState({
        isLoading: true,
      });
    }
    // e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, items, totalHits } = this.state;
    const { handleSubmit, loadMore } = this;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={handleSubmit} />
        {items.length > 0 && <ImageGallery items={items} />}
        {isLoading && <Loader />}
        {items.length > 0 && totalHits - 11 >= 1 && (
          <Button onClick={loadMore} />
        )}
      </div>
    );
  }
}
