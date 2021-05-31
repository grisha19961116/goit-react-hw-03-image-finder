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

let debounce = require('lodash.debounce');

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

  handleSubmit = async e => {
    e.preventDefault();
    const searchInputDom = document.getElementById('input-searchBar');
    const searchWord = searchInputDom.value.toLowerCase().replace(/\s/g, '');
    const { page } = this.state;

    try {
      this.setState(() => ({
        flag: true,
      }));

      await api.getFullRequest(searchWord, page).then(({ hits, totalHits }) => {
        if (totalHits === 0) throw new Error('Wrong request');
        this.setState(() => ({
          valueSubmit: searchWord,
          dataFetch: hits,
        }));

        searchWord === '' &&
          toast.warn('⚠️ Default page!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });
    } catch (err) {
      searchInputDom.value = '';
      toast.error(
        `🚀 ${
          err.message === 'Wrong request' ? 'Wrong request' : 'Server error'
        }!`,
        {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    } finally {
      this.setState(() => ({
        flag: false,
      }));
    }
  };

  handleLoadButton = async () => {
    const { valueSubmit, page } = this.state;
    const changePage = page + 1;

    const scrollList = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    try {
      this.setState(() => ({
        flag: true,
      }));

      await api.getFullRequest(valueSubmit, changePage + 1).then(({ hits }) => {
        if (hits.length === 0)
          return toast.warn('⚠️ The last page!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        this.setState(
          ({ dataFetch }) => ({
            dataFetch: [...dataFetch, ...hits],
            page: changePage,
          }),
          () => scrollList(),
        );
      });
    } catch (err) {
      toast.error('🚀 Server error!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      this.setState(() => ({
        flag: false,
      }));
    }
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
    console.log(e);
    if (e === undefined) {
      this.setState(() => ({
        fullHd: '',
      }));
    }
  };

  handleScroll = e => {
    const searchInputDom = document.getElementById('input-searchBar');
    const rootDiv = document.getElementById('root');
    const { valueSubmit, page } = this.state;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    console.log(rootDiv);
    // try {
    //   this.setState(() => ({
    //     flag: true,
    //   }));

    //   await api.getFullRequest(valueSubmit, changePage + 1).then(({ hits }) => {
    //     if (hits.length === 0)
    //       return toast.warn('⚠️ The last page!', {
    //         position: 'top-right',
    //         autoClose: 1500,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });

    //     this.setState(
    //       ({ dataFetch }) => ({
    //         dataFetch: [...dataFetch, ...hits],
    //         page: changePage,
    //       }),
    //       () => scrollList(),
    //     );
    //   });
    // } catch (err) {
    //   toast.error('🚀 Server error!', {
    //     position: 'top-right',
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // } finally {
    //   this.setState(() => ({
    //     flag: false,
    //   }));
    // }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(() => {
        const scrolled = window.scrollY;
        const viewPortHeight = rootDiv.clientHeight;
        console.log(scrolled, `scrolled`);
        console.log(viewPortHeight, `viewPortHeight`);
        if (scrolled > viewPortHeight - 1498) {
          const changePage = page + 1;
          console.log(scrolled, `scrolled`);
          console.log(viewPortHeight, `viewPortHeight`);
          // renderFn();
          return;
        }
      });
    }, options);
    observer.observe(rootDiv);

    // let scrollTop = e.srcElement.body.scrollTop;
    // console.log(e);
    // console.log(scrollTop);
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);

    // this.setState({
    //   transform: itemTranslate
    // });
  };

  componentDidMount() {
    window.addEventListener(
      'scroll',
      debounce(e => {
        this.handleScroll(e);
      }, 1000),
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { dataFetch, flag, fullHd } = this.state;

    return (
      <div>
        <Load domLoad={true} duration={500} call />

        <SearchBar onSubmit={this.handleSubmit} />
        {fullHd !== '' && (
          <Modal
            src={fullHd}
            closeModalClick={this.handleListenerForCloseModalClick}
            closeModalEsc={this.handleListenerCloseEsc}
          />
        )}
        <div className={s.wrapper__gallery}>
          <ImageGallery
            dataFetch={dataFetch}
            onClickImg={this.handleListenerForList}
          />
          {dataFetch.length > 0 && <Button onClick={this.handleLoadButton} />}
          {flag && <Load />}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    );
  }
}
