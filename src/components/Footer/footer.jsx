import React from "react";

import './footer.css'

const Footer = (props) => {
  return (
    <footer style={props.style}>
      <section className='footerBox'>
        <article className='footer_left'>
          <p>PokeReact made with React </p>
        </article>
        <article className='footer_mid'>
          <a href="https://github.com/Drag0s98">
            <div className="icon1">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.23077 16.6364C9.23077 17.0152 9.17067 17.4034 9.05048 17.8011C8.93029 18.1989 8.72356 18.5587 8.43029 18.8807C8.13702 19.2027 7.78846 19.3636 7.38462 19.3636C6.98077 19.3636 6.63221 19.2027 6.33894 18.8807C6.04567 18.5587 5.83894 18.1989 5.71875 17.8011C5.59856 17.4034 5.53846 17.0152 5.53846 16.6364C5.53846 16.2576 5.59856 15.8693 5.71875 15.4716C5.83894 15.0739 6.04567 14.714 6.33894 14.392C6.63221 14.0701 6.98077 13.9091 7.38462 13.9091C7.78846 13.9091 8.13702 14.0701 8.43029 14.392C8.72356 14.714 8.93029 15.0739 9.05048 15.4716C9.17067 15.8693 9.23077 16.2576 9.23077 16.6364ZM18.4615 16.6364C18.4615 17.0152 18.4014 17.4034 18.2812 17.8011C18.1611 18.1989 17.9543 18.5587 17.6611 18.8807C17.3678 19.2027 17.0192 19.3636 16.6154 19.3636C16.2115 19.3636 15.863 19.2027 15.5697 18.8807C15.2764 18.5587 15.0697 18.1989 14.9495 17.8011C14.8293 17.4034 14.7692 17.0152 14.7692 16.6364C14.7692 16.2576 14.8293 15.8693 14.9495 15.4716C15.0697 15.0739 15.2764 14.714 15.5697 14.392C15.863 14.0701 16.2115 13.9091 16.6154 13.9091C17.0192 13.9091 17.3678 14.0701 17.6611 14.392C17.9543 14.714 18.1611 15.0739 18.2812 15.4716C18.4014 15.8693 18.4615 16.2576 18.4615 16.6364ZM20.7692 16.6364C20.7692 15.5 20.4375 14.5341 19.774 13.7386C19.1106 12.9432 18.2115 12.5455 17.0769 12.5455C16.6827 12.5455 15.7452 12.6449 14.2644 12.8438C13.5817 12.9479 12.8269 13 12 13C11.1731 13 10.4183 12.9479 9.73558 12.8438C8.27404 12.6449 7.33654 12.5455 6.92308 12.5455C5.78846 12.5455 4.88942 12.9432 4.22596 13.7386C3.5625 14.5341 3.23077 15.5 3.23077 16.6364C3.23077 17.4697 3.38462 18.1965 3.69231 18.8168C4 19.437 4.38942 19.9247 4.86058 20.2798C5.33173 20.6349 5.91827 20.919 6.62019 21.1321C7.32212 21.3452 7.99519 21.4848 8.63942 21.5511C9.28365 21.6174 10 21.6506 10.7885 21.6506H13.2115C14 21.6506 14.7163 21.6174 15.3606 21.5511C16.0048 21.4848 16.6779 21.3452 17.3798 21.1321C18.0817 20.919 18.6683 20.6349 19.1394 20.2798C19.6106 19.9247 20 19.437 20.3077 18.8168C20.6154 18.1965 20.7692 17.4697 20.7692 16.6364ZM24 14.1364C24 16.0966 23.7067 17.6638 23.1202 18.8381C22.7548 19.5672 22.2476 20.197 21.5986 20.7273C20.9495 21.2576 20.2716 21.6648 19.5649 21.9489C18.8582 22.233 18.0409 22.4579 17.113 22.6236C16.1851 22.7893 15.3606 22.8935 14.6394 22.9361C13.9183 22.9787 13.1154 23 12.2308 23C11.4808 23 10.7981 22.9858 10.1827 22.9574C9.56731 22.929 8.85817 22.8698 8.05529 22.7798C7.2524 22.6899 6.51923 22.5478 5.85577 22.3537C5.19231 22.1596 4.53365 21.9157 3.87981 21.6222C3.22596 21.3286 2.64423 20.9451 2.13462 20.4716C1.625 19.9981 1.21154 19.4536 0.894231 18.8381C0.298077 17.6733 0 16.1061 0 14.1364C0 11.892 0.653846 10.017 1.96154 8.51136C1.70192 7.73485 1.57212 6.92992 1.57212 6.09659C1.57212 4.99811 1.81731 3.96591 2.30769 3C3.34615 3 4.25962 3.18703 5.04808 3.56108C5.83654 3.93513 6.74519 4.51989 7.77404 5.31534C9.1875 4.9839 10.6731 4.81818 12.2308 4.81818C13.6538 4.81818 15 4.9697 16.2692 5.27273C17.2788 4.49621 18.1779 3.9233 18.9663 3.55398C19.7548 3.18466 20.6635 3 21.6923 3C22.1827 3.96591 22.4279 4.99811 22.4279 6.09659C22.4279 6.92045 22.2981 7.71591 22.0385 8.48295C23.3462 9.99811 24 11.8826 24 14.1364Z"
                  fill="currentColor"
                ></path>
              </svg></div
            ></a>
        </article>
        <article className='footer_right'>
          Copyright &copy; 2021 By Drag0s98
        </article>
      </section>


    </footer>
  )
};

export default Footer;
