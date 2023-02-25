import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { AxiosApiService } from './services/services';

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
      console.log('fff');
      try {
        this.setState({ isLoading: true });
        const items = await AxiosApiService(this.query);
        this.setState({ items, isLoading: false });
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }
    console.log(this.items);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1,
      query: e.target.elements[1].value,
      isLoading: true,
      items: [],
    });
    e.target.reset();
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        {/* <ImageGallery />
        {this.items.length > 0 && <Button onClick={xxx} />}
        <Modal /> */}
      </div>
    );
  }
}
