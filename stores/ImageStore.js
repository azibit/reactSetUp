import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from './actions/ImageActions');

var ImageStore = Reflux.createStore({

  constructor(props) {
    super(props);
    listenables: [ImageActions],
      this.state = {
        imagelist: [],
        sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats,memes'
      }

      this.init = this.init.bind(this);
  }
  init() {
      this.fetchList();
    },

    fetchList() {
      $.ajax({
        url: this.sourceUrl,
        dataType: 'jsonp',
        jsonpCallback: 'jsonFlickrFeed',
        cache: false,
        context: this,
        success: function(data) {
          console.log('fetch complete');
          this.imagelist = data.items;
          this.trigger(this.imagelist);
        }
      });
    }
});

module.exports = ImageStore;
