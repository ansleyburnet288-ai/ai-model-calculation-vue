<template>
    <button @click="scrollToTop" class="scroll-to-top-btn" :class="isVisible ? 'opacity-100' : 'opacity-0'">
        &#x2191;
    </button>
  </template>
  
  <script>
  import { throttle } from 'lodash';
  export default {
    data() {
        return {
            isVisible: true,
        }
    },
    mounted() {
        // window.addEventListener("scroll", handleScroll());
    },
    beforeDestroy() {
        // window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: throttle(function() { // Only logs at most once every 100 milliseconds
            console.log('Scrolling...');
        }, 100), 
        // handleScroll() {
        //     console.log('scroll:handleScroll:', window.scrollY)
        //     this.isVisible = window.scrollY > 300
        // },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
  }
  </script>
  
  <style scoped>
  .scroll-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    background-color: #9333EA;
    color: white;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
  }
  .opacity-100 {
    opacity: 100;
  }
  .opacity-0 {
    opacity: 0;
  }
  </style>