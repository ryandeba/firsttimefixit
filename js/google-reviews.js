Vue.component("google-reviews", {
  template: `
    <div class="container-fluid border-bottom">
      <div class="container pt-3" style="padding-top:25px">
        <h2>Reviews</h2>
        <p>Check out what our customers are saying.</p>
      </div>

      <div class="d-flex justify-content-center" v-if="loading">
        Loading... (TODO: cool loading animation here)
      </div>

      <template v-if="!loading">
        <div class="d-flex justify-content-center">
          <div class="card" style="width: 18rem; margin: 20px;" v-for="review in reviews">
            <div class="card-header">
              <i class="fas fa-star" v-for="star in review.starRating"></i>
              <i class="far fa-star" v-for="star in 5 - review.starRating"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ review.name }}</h5>

              <p class="card-text">
                {{ review.comment }}
              </p>

              <strong class="card-text">
                - {{ review.reviewer.displayName }}
              </strong>

              <p>
                <em style="font-size: 12px;">
                  {{ review.createTime }}
                </em>
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  `,

  data() {
    return {
      reviews: [],

      loading: false
    };
  },

  methods: {
    load() {
      this.loading = true;

      Promise.resolve()
        .then(() => {
          return new Promise(r => setTimeout(r, 3000));
        })
        .then(() => {
          // TODO: load this data in for real
          this.reviews = [
            {
              "name": "REVIEW_NAME_1",
              "reviewId": "REVIEW_ID_1",
              "reviewer": {
                displayName: "Some satisfied customer"
              },
              "starRating": 5,
              "comment": "COMMENT_1",
              "createTime": new Date().toISOString(),
              "updateTime": new Date().toISOString(),
              "reviewReply": {
                // TODO
              }
            },
            {
              "name": "REVIEW_NAME_2",
              "reviewId": "REVIEW_ID_2",
              "reviewer": {
                // TODO
                displayName: "Another satisfied customer"
              },
              "starRating": 4,
              "comment": "COMMENT_2",
              "createTime": new Date().toISOString(),
              "updateTime": new Date().toISOString(),
              "reviewReply": {
                // TODO
              }
            }
          ];
        })
        .finally(() => {
          this.loading = false;
        })
    }
  },

  beforeMount() {
    this.load();
  }
});
