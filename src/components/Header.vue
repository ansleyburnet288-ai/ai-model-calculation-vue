<template>
    <header class="professional-header">
      <div class="header-container">
        <!-- Logo/Brand Section -->
        <div class="header-brand">
          <router-link to="/" class="brand-link">
            <h1 class="brand-title">Minitensor</h1>
            <span class="brand-subtitle">AI Calculation System</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="header-nav hidden md:flex">
          <router-link to="/" class="nav-link" :class="{ 'active': $route.name === 'Home' }">
            Home
          </router-link>
          <router-link 
            v-if="isLoggedIn && isShowSpecBuilderPage" 
            to="/spec-builder" 
            class="nav-link"
            :class="{ 'active': $route.name === 'SpecBuilder' }">
            Spec Builder
          </router-link>
          <router-link 
            v-if="isLoggedIn && isShowEscrowPage" 
            to="/escrow" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Escrow' }">
            Escrow
          </router-link>
          <router-link 
            to="/about" 
            class="nav-link"
            :class="{ 'active': $route.name === 'About' }">
            About
          </router-link>
          <router-link 
            v-if="isLoggedIn && isShowReferralPage" 
            to="/referral" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Referral' }">
            Referral
          </router-link>
        </nav>

        <!-- User Section / Auth Buttons -->
        <div class="header-actions">
          <div v-if="isLoggedIn" class="user-section">
            <div class="user-info">
              <span v-if="fullName.trim() !== ''" class="user-name">{{ fullName }}</span>
              <span v-else class="user-name">Welcome</span>
            </div>
            <div class="user-menu">
              <router-link to="/account" class="user-menu-link" :class="{ 'active': $route.name === 'Account' }">
                Account
              </router-link>
              <button @click="logoutClicked()" class="logout-btn">Sign Out</button>
            </div>
          </div>
          <div v-else class="auth-buttons">
            <router-link to="/login" class="btn-login">Login</router-link>
            <router-link to="/create" class="btn-register">Register</router-link>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click.stop="toggleMenu" 
          class="mobile-menu-btn"
          aria-label="Toggle menu">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Full-Screen Menu -->
      <transition name="mobile-menu">
        <div v-if="isMenuOpen" class="mobile-menu-overlay" @click.self="toggleMenu">
          <!-- Menu Panel -->
          <div class="mobile-menu-panel" @click.stop>
            <div class="mobile-menu-header">
              <div class="mobile-header-content">
                <div v-if="isLoggedIn" class="mobile-user-info">
                  <span v-if="fullName.trim() !== ''" class="mobile-user-name">{{ fullName }}</span>
                  <span v-else class="mobile-user-name">Welcome</span>
                </div>
                <div v-else class="mobile-brand">
                  <span class="mobile-brand-name">Minitensor</span>
                </div>
              </div>
              <button @click="toggleMenu" class="mobile-menu-close" aria-label="Close menu">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <nav class="mobile-nav">
              <router-link to="/" @click="handleMenuClick" class="mobile-nav-link" :class="{ 'active': $route.name === 'Home' }">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Home</span>
              </router-link>
              <router-link 
                v-if="isLoggedIn && isShowSpecBuilderPage" 
                to="/spec-builder" 
                @click="handleMenuClick" 
                class="mobile-nav-link"
                :class="{ 'active': $route.name === 'SpecBuilder' }">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Spec Builder</span>
              </router-link>
              <router-link 
                v-if="isLoggedIn && isShowEscrowPage" 
                to="/escrow" 
                @click="handleMenuClick" 
                class="mobile-nav-link"
                :class="{ 'active': $route.name === 'Escrow' }">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Escrow</span>
              </router-link>
              <router-link 
                to="/about" 
                @click="handleMenuClick" 
                class="mobile-nav-link"
                :class="{ 'active': $route.name === 'About' }">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span>About</span>
              </router-link>
              <router-link 
                v-if="isLoggedIn && isShowReferralPage" 
                to="/referral" 
                @click="handleMenuClick" 
                class="mobile-nav-link"
                :class="{ 'active': $route.name === 'Referral' }">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8531 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Referral</span>
              </router-link>
              <router-link 
                v-if="isLoggedIn" 
                to="/account" 
                @click="handleMenuClick" 
                class="mobile-nav-link"
                :class="{ 'active': $route.name === 'Account' }">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>My Account</span>
              </router-link>
              <div v-if="isLoggedIn" class="mobile-nav-divider"></div>
              <button 
                v-if="isLoggedIn" 
                @click="handleLogout" 
                class="mobile-logout-btn">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Sign Out</span>
              </button>
              <router-link 
                v-if="!isLoggedIn" 
                to="/login" 
                @click="handleMenuClick" 
                class="mobile-nav-link">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 17L15 12L10 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Login</span>
              </router-link>
              <router-link 
                v-if="!isLoggedIn" 
                to="/create" 
                @click="handleMenuClick" 
                class="mobile-nav-link mobile-nav-link-primary">
                <svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H4C2.93913 15 1.92172 15.4214 1.17157 16.1716C0.421427 16.9217 0 17.9391 0 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 8V14M17 11H23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Register</span>
              </router-link>
            </nav>
          </div>
        </div>
      </transition>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isDesktop: window.innerWidth >= 768
      }
    },
    computed: {
      isShowReferralPage() {
        return !['homeowner', 'homeowner_3d_replacement'].includes(this.$store.state.user.userRole)
      },
      isShowEscrowPage() {
        return ['product_supplier', 'subcontrator', 'vdc_partner', 'spec_build_partnership', 'realtor'].includes(this.$store.state.user.userRole)
      },
      isShowSpecBuilderPage() {
        return ['spec_build_partnership', 'realtor'].includes(this.$store.state.user.userRole)
      },
      is5Pages() {
        return ['product_supplier', 'subcontrator', 'vdc_partner'].includes(this.$store.state.user.userRole)
      },
      isLoggedIn() {
        return this.$store.state.user.uid
      },
      fullName() {
        return this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName
      }
    },
    methods: {
      logoutClicked() {
        this.$store.dispatch('logout');
        this.$router.push('/').catch(() => {});
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      handleMenuClick() {
        this.toggleMenu();
      },
      handleLogout() {
        this.logoutClicked();
        this.toggleMenu();
      },
      handleResize() {
        this.isDesktop = window.innerWidth >= 768;
        if (this.isDesktop) this.isMenuOpen = false;
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        isMenuOpen(val) {
            if (val) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.classList.add('menu-open');
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.classList.remove('menu-open');
            }
        }
    }
  }
  </script>
  

<style lang="scss" scoped>
.professional-header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Brand Section */
.header-brand {
  flex-shrink: 0;
}

.brand-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-subtitle {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Desktop Navigation */
.header-nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: white;
    background: rgba(147, 51, 234, 0.2);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, #9333EA, #A855F7);
      border-radius: 2px;
    }
  }
}

/* Header Actions */
.header-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-name {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-menu-link {
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: white;
    background: rgba(147, 51, 234, 0.2);
  }
}

.logout-btn {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-login {
  padding: 0.5rem 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }
}

.btn-register {
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
  box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3);

  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
  }
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none; /* Hidden by default */
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;
  z-index: 1000;
  position: relative;

  /* Show only on mobile screens (below md breakpoint) */
  @media (max-width: 767px) {
    display: flex !important;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:active {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }
}

/* Mobile Menu */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  height: 100dvh;
  z-index: 99999;
  display: flex !important;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #9333EA 100%);
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Support for safe areas on notched devices */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.mobile-menu-panel {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  /* Support for safe areas on notched devices */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 70px;
  background: rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.mobile-header-content {
  flex: 1;
  display: flex;
  align-items: center;
}

.mobile-user-info {
  flex: 1;
}

.mobile-user-name {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mobile-brand {
  flex: 1;
}

.mobile-brand-name {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  word-break: break-word;
}

.mobile-menu-close {
  padding: 0.5rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;
  z-index: 10;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  flex: 1;
  overflow-y: auto;
  width: 100%;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  border-left: 4px solid transparent;
  min-height: 60px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    border-left-color: rgba(255, 255, 255, 0.3);
  }

  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.15);
    border-left-color: white;
    font-weight: 600;
  }

  &.mobile-nav-link-primary {
    margin: 0.5rem 1.5rem;
    width: auto;
    max-width: calc(100% - 3rem);
    background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
    border-radius: 6px;
    justify-content: center;
    border-left: none;
    color: white;
    align-self: center;

    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
    -webkit-font-smoothing: antialiased;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    will-change: transform;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
    }
  }
}

.nav-link-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
}

.mobile-nav-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1rem 1.5rem;
}

.mobile-logout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 1.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 60px;
  width: calc(100% - 3rem);
  max-width: calc(100% - 3rem);
  box-sizing: border-box;
  word-wrap: break-word;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

/* Mobile Menu Animations */
.mobile-menu-enter-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .mobile-menu-panel,
.mobile-menu-leave-active .mobile-menu-panel {
  transition: opacity 0.3s ease, transform 0.3s ease-in-out;
}

.mobile-menu-enter .mobile-menu-overlay,
.mobile-menu-leave-to .mobile-menu-overlay {
  opacity: 0;
}

.mobile-menu-enter .mobile-menu-panel,
.mobile-menu-leave-to .mobile-menu-panel {
  opacity: 0;
  transform: translateY(-20px);
}

/* Ensure mobile menu is visible on mobile only */
@media (min-width: 768px) {
  .mobile-menu-overlay {
    display: none !important;
  }
}

/* Prevent body scroll when menu is open */
body.menu-open {
  overflow: hidden;
  position: fixed;
  inset: 0;
  height: 100dvh;
}

/* Responsive */
@media (max-width: 767px) {
  .header-container {
    padding: 1rem 1.25rem;
  }

  .brand-title {
    font-size: 1.25rem;
  }

  .brand-subtitle {
    font-size: 0.65rem;
  }

  /* Hide desktop navigation on mobile */
  .header-nav {
    display: none !important;
  }

  /* Hide user section details on mobile, show in menu */
  .user-section {
    display: none;
  }

  .auth-buttons {
    display: none;
  }
}

/* Responsive styles for mobile menu */
@media (max-width: 480px) {
  .mobile-menu-header {
    padding: 1rem;
    min-height: 60px;
  }

  .mobile-user-name,
  .mobile-brand-name {
    font-size: 0.9rem;
  }

  .mobile-menu-close {
    padding: 0.375rem;
  }

  .mobile-nav {
    padding: 0.5rem 0;
  }

  .mobile-nav-link {
    padding: 1rem 1.25rem;
    font-size: 1rem;
    min-height: 56px;
    gap: 0.75rem;
  }

  .nav-link-icon {
    width: 18px;
    height: 18px;
  }

  .mobile-nav-link-primary {
    margin: 0.5rem 1.25rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    max-width: calc(100% - 2.5rem);
  }

  .mobile-logout-btn {
    margin: 0.5rem 1.25rem;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    min-height: 56px;
    width: calc(100% - 2.5rem);
    max-width: calc(100% - 2.5rem);
  }

  .mobile-nav-divider {
    margin: 0.75rem 1.25rem;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .mobile-menu-header {
    padding: 1.25rem 1.5rem;
  }

  .mobile-nav-link {
    padding: 1.125rem 1.5rem;
  }
}

@media (min-width: 768px) {
  /* Hide mobile menu button on desktop */
  .mobile-menu-btn {
    display: none !important;
  }

  /* Ensure desktop nav is visible */
  .header-nav {
    display: flex !important;
  }

  /* Hide mobile menu overlay on desktop */
  .mobile-menu-overlay {
    display: none !important;
  }
}
</style>