  <template>
    <div class="packages-accordion">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="package-card"
        :class="{ 'active': activeIndex === index }"
      >
        <button
          @click="toggleSection(index)"
          class="package-header"
        >
          <div class="package-header-content">
            <div class="package-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="package-title">
              {{ section.title }}
            </h3>
          </div>
          <svg
            class="package-arrow"
            :class="{ 'rotated': activeIndex === index }"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
  
        <transition name="slide-down">
          <div
            v-show="activeIndex === index"
            class="package-content"
          >
            <div v-html="section.content" class="package-text"></div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        sections: [
          {
            title: 'What is a Structural Shell Package?',
            content: `A Structural Shell Package refers to a construction approach where the main structure and exterior envelope of a building are completed, making it weather-tight and ready for interior build-out. This typically includes the foundation, structural walls, roof, exterior doors and windows, but excludes interior finishes, walls, and systems. 
            The concept is often called “shell and core” or “core and shell” construction, and it’s widely used to provide a secure, flexible base that can be customized in later phases.
            For wildfire-prone areas like Los Angeles, using advanced materials such as ICCF (Insulated Composite Concrete Forms) or ICF (Insulated Concrete Forms) enhances fire resistance and structural resilience
            `
          },
          {
            title: 'Our LA Customized ICCF/ICF Structural Shell Package',
            content: `Our Structural Shell Package is an ICCF-ICF house design strategy tailored for Los Angeles wildfire rebuilding. The shell includes everything from the foundation to the roof, built to be ready for close-in inspection. Once complete, the house is watertight and prepared for interior walls and finishes.
                        <ul>
                          What’s Included:
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;Waterproofed foundation</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;ICCF-ICF exterior walls poured to the roof</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;All exterior doors and windows installed</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;Waterproofed roof</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;Temporary safety rails at exterior decks and roof</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;No interior walls yet</li>
                        </ul>
                        The Shell contract delivers a 100% complete, weather-tight structure. Your home is now ready for the next phases of construction.
                        <br>
                        Summary:
                        A Structural Shell Package provides a robust, fire-resistant building envelope, ensuring your home is protected and ready for interior customization—an ideal solution for rebuilding in wildfire-prone regions.`
          },
          {
            title: 'Minitensor+ ICCF-ICF Structural Shell Packages to choose from',
            content: `1. 9 Foot Ceilings, Medium Glass, 8 Foot Doors
                        ( $750 SF ) <br>
                      2. 10 Foot Ceilings, Mid-High Glass Package, 8-9 Foot Doors
                        ( $850 SF ) <br>
                      3. 12 Foot Ceilings, Max Glass-High End Package 12 Foot floor to ceiling Doors and Windows headers to the ceiling 
                        ( $1000 SF ) `
          },
        //   {
        //     title: 'Minitensor+',
        //     content: `Minitensor+ is offering the ICCF-ICF Structural Package because well know if the homeowner has a choice between rebuilding with flammable wood or concrete and steel the choice is obvious. So we are offering a unique choice to solve this problem. The building industry is failing the homeowners who must be able to insure the new home when built. Its a fact that you may not get insurance for a wood in the Pacifici palisades this year of 5 years from now.`,
        //   },
        ]
      };
    },
    methods: {
      toggleSection(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>

<style scoped>
.packages-accordion {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.package-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.package-card:hover {
  border-color: #9333EA;
  box-shadow: 0 4px 16px rgba(147, 51, 234, 0.15);
  transform: translateY(-2px);
}

.package-card.active {
  border-color: #9333EA;
  box-shadow: 0 8px 24px rgba(147, 51, 234, 0.2);
}

.package-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.package-card.active .package-header {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
}

.package-header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.package-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border-radius: 8px;
  color: #9333EA;
  flex-shrink: 0;
}

.package-icon svg {
  width: 24px;
  height: 24px;
}

.package-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.4;
}

.package-arrow {
  width: 20px;
  height: 20px;
  color: #9333EA;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.package-arrow.rotated {
  transform: rotate(180deg);
}

.package-content {
  padding: 1.5rem;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.package-text {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1rem;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}

.slide-down-enter,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

@media (max-width: 768px) {
  .package-header {
    padding: 1rem;
  }

  .package-icon {
    width: 36px;
    height: 36px;
  }

  .package-icon svg {
    width: 20px;
    height: 20px;
  }

  .package-title {
    font-size: 1rem;
  }

  .package-content {
    padding: 1.25rem;
  }
}
</style>
  