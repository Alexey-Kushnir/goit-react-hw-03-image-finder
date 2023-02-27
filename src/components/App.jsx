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
    isLoading: false,
    items: [],
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const items = await AxiosApiService(this.state.query, this.state.page);
        this.setState({ items, isLoading: false });
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }

    if (this.state.page !== prevState.page) {
      try {
        this.setState({ isLoading: true });
        const items = await AxiosApiService(this.state.query, this.state.page);
        this.setState({ items, isLoading: false });
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1,
      query: e.target.elements[1].value.trim(),
      isLoading: true,
      items: [],
    });
    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, items } = this.state;
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
        {isLoading && <Loader />}
        {items.length > 0 && <ImageGallery items={items} />}
        {items.length > 0 && <Button onClick={loadMore} />}
      </div>
    );
  }
}
