import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import s from './App.module.css';
import api from './API/api.js';

import SearchBar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button.jsx';
import Load from './components/Loader/Loader.jsx';
import Modal from './components/Modal//Modal.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      valueSubmit: '',
      dataFetch: [],
      page: 1,
      flag: false,
      fullHd: '',
    };
    this.handleListenerCloseEsc = this.handleListenerCloseEsc.bind(this);
  }

  handleSubmit = even => {
    even.preventDefault();
    const searchWord = even.target.lastChild.value;
    const { page } = this.state;

    api.getFullRequest(searchWord, page).then(dataRequest => {
      this.setState(({ valueSubmit, dataFetch }) => ({
        valueSubmit: searchWord,
        dataFetch: dataRequest.hits,
      }));
    });
  };

  handleLoadButton = () => {
    const { valueSubmit, page } = this.state;
    const changePage = page + 1;
    this.setState(() => ({
      flag: true,
    }));

    const scrollList = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    api.getFullRequest(valueSubmit, changePage + 1).then(dataRequest => {
      this.setState(
        ({ dataFetch }) => ({
          dataFetch: [...dataFetch, ...dataRequest.hits],
          page: changePage,
          flag: false,
        }),
        () => scrollList(),
      );
    });
  };

  handleListenerForList = e => {
    if (e.target.tagName === 'IMG') {
      this.setState(() => ({
        fullHd: e.target.alt,
      }));
    }
  };

  handleListenerForCloseModalClick = e => {
    if (e.target.tagName !== 'IMG') {
      this.setState(() => ({
        fullHd: '',
      }));
    }
  };

  handleListenerCloseEsc = e => {
    if (e === undefined) {
      this.setState(() => ({
        fullHd: '',
      }));
    }
  };

  render() {
    const { dataFetch, flag, fullHd } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleInput} />
        {fullHd !== '' && (
          <Modal
            src={fullHd}
            closeModalClick={this.handleListenerForCloseModalClick}
            closeModalEsc={this.handleListenerCloseEsc}
          />
        )}
        <ImageGallery
          dataFetch={dataFetch}
          onClickImg={this.handleListenerForList}
        />
        {dataFetch.length > 0 && <Button onClick={this.handleLoadButton} />}
        {flag && <Load />}
        {/* <ToastContainer></ToastContainer> */}
      </div>
    );
  }
}
