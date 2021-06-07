import { Component, createRef } from 'react';
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
    this.myRef = createRef();
    this.state = {
      valueSubmit: '',
      dataFetch: [],
      page: 1,
      flag: false,
      fullHd: '',
    };
  }

  scrollList = () => {
    let forwardBack;
    const resolution = this.myRef.current;

    switch (resolution) {
      case 'HD':
        forwardBack = 1080;
        break;
      case 'fullHD':
        forwardBack = 1150;
        break;
      case '4k':
        forwardBack = 1520;
        break;

      default:
        break;
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight - forwardBack,
      behavior: 'smooth',
    });
  };

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

        this.setState(
          () => ({
            valueSubmit: searchWord,
            dataFetch: hits,
          }),
          () => this.scrollList(),
        );

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

  renderLazyAndButton = async () => {
    const { valueSubmit, page } = this.state;
    const changePage = page + 1;

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
          () => this.scrollList(),
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

  handleLoadButton = async () => await this.renderLazyAndButton();

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

  handleScrollRoot = e => {
    const rootDiv = document.getElementById('root');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    let forwardBack;
    const resolution = this.myRef.current;

    switch (resolution) {
      case 'HD':
        forwardBack = 900;
        break;
      case 'fullHD':
        forwardBack = 965;
        break;
      case '4k':
        forwardBack = 1325;
        break;

      default:
        break;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(() => {
        const scrolled = window.scrollY;
        const viewPortHeight = rootDiv.clientHeight;
        const different = viewPortHeight - Math.round(scrolled) - forwardBack;
        console.log(different, `different`);

        if (different === 0) this.renderLazyAndButton();
      });
    }, options);
    observer.observe(rootDiv);
  };

  componentDidMount() {
    const widthScr = window.screen.width;

    if (widthScr === 2560) {
      this.myRef.current = '4k';
    }
    if (widthScr === 1920) {
      this.myRef.current = 'fullHD';
    }
    if (widthScr === 1600) {
      this.myRef.current = 'HD';
    }

    window.addEventListener(
      'scroll',
      debounce(e => {
        this.handleScrollRoot(e);
      }, 1000),
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollRoot);
  }

  render() {
    const { dataFetch, flag, fullHd } = this.state;

    return (
      <div>
        <Load domLoad={true} duration={500} />
        <SearchBar submitForm={this.handleSubmit} />
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
