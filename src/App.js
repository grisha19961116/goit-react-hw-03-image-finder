import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import s from './App.module.css';
import api from './API/api.js';

import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button.jsx';
import Load from './components/Loader/Loader.jsx';
import Modal from './components/Modal//Modal.jsx';

export default class App extends Component {
  state = {
    valueSubmit: '',
    dataFetch: [],
    page: 1,
    flag: false,
    fullHd: '',
  };

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

    api.getFullRequest(valueSubmit, changePage + 1).then(dataRequest => {
      this.setState(({ dataFetch }) => ({
        dataFetch: [...dataFetch, ...dataRequest.hits],
        page: changePage,
        flag: false,
      }));
    });
  };

  handleListenerForList = even => {
    if (even.target.tagName === 'IMG') {
      this.setState(() => ({
        fullHd: even.target.alt,
      }));
    }
  };

  handleListenerForCloseModalClick = even => {
    if (even.target.tagName !== 'IMG') {
      this.setState(() => ({
        fullHd: '',
      }));
    }
    console.log(`handleListenerForCloseModalClick`);
  };

  handleListenerForCloseModalKeydown = even => {
    if (even.code === 'Escape') {
      this.setState(() => ({
        fullHd: '',
      }));
      return true;
    }
    console.log(`handleListenerForCloseModalKeydown`);
  };

  render() {
    const { dataFetch, flag, fullHd } = this.state;

    window.scrollTo(0, 10000);
    return (
      <div onKeyUp={this.handleListenerForCloseModalKeydown}>
        <Searchbar onSubmit={this.handleSubmit} onChange={this.handleInput} />
        {fullHd !== '' && (
          <Modal
            src={fullHd}
            closeDown={this.handleListenerForCloseModalKeydown}
            onClickClose={this.handleListenerForCloseModalClick}
          />
        )}
        <ImageGallery
          dataFetch={dataFetch}
          onClick={this.handleListenerForList}
        />
        {dataFetch.length > 0 && <Button onClick={this.handleLoadButton} />}
        {flag && <Load />}
        {/* <ToastContainer></ToastContainer> */}
      </div>
    );
  }
}
