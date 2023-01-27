export const Footer = () => (
  <footer className="footer p-10 bg-neutral text-neutral-content items-center">
    <div>
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
      >
        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </svg>
      <p>
        Powered by{' '}
        <a
          className="link"
          href="https://www.coingecko.com/api"
          rel="noopener noreferrer"
        >
          CoinGecko API
        </a>
        <br />
      </p>
      <p>
        Styled with{' '}
        <a
          className="link"
          href="https://daisyui.com/"
          rel="noopener noreferrer"
        >
          daisyUI
        </a>
        <br />
      </p>
      <p>
        Source code available on{' '}
        <a
          className="link"
          href="https://github.com/vrazn/btc-exchange-rates"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
    <div>
      <span className="footer-title">Social</span>
      <div className="grid grid-flow-col gap-4">
        <a
          href="https://github.com/vrazn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="24px"
            height="24px"
          >
            <g fill="#ffffff" stroke="none">
              <g transform="scale(10.66667,10.66667)">
                <path d="M12,2c-5.52344,0 -10,4.47656 -10,10c0,5.52344 4.47656,10 10,10c5.52344,0 10,-4.47656 10,-10c0,-5.52344 -4.47656,-10 -10,-10zM12,4c4.41016,0 8,3.58984 8,8c0,0.46875 -0.04687,0.92969 -0.125,1.375c-0.24609,-0.05469 -0.60937,-0.12109 -1.03125,-0.125c-0.3125,-0.00391 -0.70312,0.04688 -1.03125,0.09375c0.11328,-0.34766 0.1875,-0.73047 0.1875,-1.125c0,-0.96094 -0.46875,-1.85547 -1.21875,-2.59375c0.20703,-0.76953 0.41016,-2.08984 -0.125,-2.625c-1.58203,0 -2.45703,1.12891 -2.5,1.1875c-0.48828,-0.11719 -0.99219,-0.1875 -1.53125,-0.1875c-0.69141,0 -1.35156,0.125 -1.96875,0.3125l0.1875,-0.15625c0,0 -0.87891,-1.21875 -2.5,-1.21875c-0.56641,0.57031 -0.30859,2.01563 -0.09375,2.75c-0.76562,0.73047 -1.25,1.59375 -1.25,2.53125c0,0.32813 0.07813,0.64063 0.15625,0.9375c-0.27734,-0.03125 -1.27734,-0.125 -1.6875,-0.125c-0.36328,0 -0.92578,0.08594 -1.375,0.1875c-0.0625,-0.39844 -0.09375,-0.80469 -0.09375,-1.21875c0,-4.41016 3.58984,-8 8,-8zM5.46875,13.28125c0.39453,0 1.59375,0.14063 1.75,0.15625c0.01953,0.05469 0.03906,0.10547 0.0625,0.15625c-0.42969,-0.03906 -1.26172,-0.09766 -1.8125,-0.03125c-0.36719,0.04297 -0.83594,0.17578 -1.25,0.28125c-0.03125,-0.125 -0.07031,-0.24609 -0.09375,-0.375c0.4375,-0.09375 1.01172,-0.1875 1.34375,-0.1875zM18.84375,13.5c0.39844,0.00391 0.76172,0.07031 1,0.125c-0.01172,0.06641 -0.04687,0.12109 -0.0625,0.1875c-0.25391,-0.05859 -0.67187,-0.14453 -1.15625,-0.15625c-0.23437,-0.00391 -0.60937,0.00781 -0.9375,0.03125c0.01563,-0.03125 0.01953,-0.0625 0.03125,-0.09375c0.33984,-0.04687 0.77344,-0.09766 1.125,-0.09375zM6.09375,13.78125c0.5625,0.00391 1.08984,0.04297 1.3125,0.0625c0.52344,0.97656 1.58203,1.69922 3.21875,2c-0.40234,0.22266 -0.76172,0.53516 -1.03125,0.90625c-0.23437,0.01953 -0.48047,0.03125 -0.71875,0.03125c-0.69531,0 -1.12891,-0.62109 -1.5,-1.15625c-0.375,-0.53516 -0.83594,-0.59375 -1.09375,-0.625c-0.26172,-0.03125 -0.35156,0.11719 -0.21875,0.21875c0.76172,0.58594 1.03516,1.28125 1.34375,1.90625c0.27734,0.5625 0.85938,0.875 1.5,0.875h0.125c-0.01953,0.10938 -0.03125,0.21094 -0.03125,0.3125v1.09375c-2.30859,-0.93359 -4.06641,-2.90625 -4.71875,-5.34375c0.41016,-0.10156 0.87109,-0.20703 1.21875,-0.25c0.16016,-0.01953 0.36328,-0.03516 0.59375,-0.03125zM18.625,13.90625c0.44922,0.01172 0.84766,0.09766 1.09375,0.15625c-0.55078,2.07031 -1.91016,3.79297 -3.71875,4.84375v-0.59375c0,-0.85156 -0.67187,-1.94531 -1.625,-2.46875c1.58203,-0.28906 2.61328,-0.98047 3.15625,-1.90625c0.37891,-0.02734 0.82422,-0.03906 1.09375,-0.03125zM12.5,18c0.27344,0 0.5,0.22656 0.5,0.5v1.4375c-0.32812,0.04297 -0.66016,0.0625 -1,0.0625v-1.5c0,-0.27344 0.22656,-0.5 0.5,-0.5zM10.5,19c0.27344,0 0.5,0.22656 0.5,0.5v0.4375c-0.33594,-0.04297 -0.67578,-0.10547 -1,-0.1875v-0.25c0,-0.27344 0.22656,-0.5 0.5,-0.5zM14.5,19c0.24219,0 0.45313,0.17578 0.5,0.40625c-0.32422,0.13281 -0.65625,0.25391 -1,0.34375v-0.25c0,-0.27344 0.22656,-0.5 0.5,-0.5z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/vrazn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="24px"
            height="24px"
          >
            <g fill="#ffffff" stroke="none">
              <g transform="scale(10.66667,10.66667)">
                <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/vrazn_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="24px"
            height="24px"
          >
            <g fill="#ffffff" stroke="none">
              <g transform="scale(10.66667,10.66667)">
                <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </footer>
);
