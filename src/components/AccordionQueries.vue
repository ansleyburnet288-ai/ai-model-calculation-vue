  <template>
    <div class="queries-accordion">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="query-card"
        :class="{ 'active': activeIndex === index }"
      >
        <button
          @click="toggleSection(index)"
          class="query-header"
        >
          <div class="query-header-content">
            <div class="query-number">{{ index + 1 }}</div>
            <h3 class="query-title">
              {{ section.title }}
            </h3>
          </div>
          <svg
            class="query-arrow"
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
            class="query-content"
          >
            <div v-html="section.content" class="query-text"></div>
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
            title: '1. Can I afford to rebuild after a fire',
            content: `Our AI modal calculation system instantly processes your insurance payout data and generates comprehensive rebuilding scenarios. Simply enter your insurance information into the intelligent calculation interface, and our AI engine will analyze multiple construction pathways to determine the most financially viable rebuilding strategy for your property.`,
          },
          {
            title: '2. Will my property have positive equity when done',
            content: `The AI calculation system uses predictive modeling to forecast property equity outcomes across different rebuilding workflows. Our intelligent algorithms compare Owner Representative services against traditional methods, providing real-time equity projections that help you make data-driven decisions for maximum property value recovery.`,
          },
          {
            title: '3. Can I build a structure with materials that won\'t burn or are highly non flammable',
            content: `Our AI calculation system includes advanced material analysis capabilities, evaluating fire-resistant construction options and their impact on both cost and insurance eligibility. The intelligent system processes material specifications, local building codes, and insurance requirements to recommend optimal non-flammable building solutions tailored to your specific situation.`,
          },
          {
              title: '4. Can I get a reasonable insurance policy for my new home when done',
              content: `The AI calculation system incorporates insurance market intelligence, analyzing how different construction materials and methods affect policy availability and premiums. Our predictive models evaluate concrete and steel structures with high-end features, providing insurance probability assessments that help you understand coverage options before construction begins.`
          },
          {
              title: '5. Is hiring a General Contractor the best way to rebuild in a wildfire area',
              content: `Our AI calculation system performs comparative analysis across multiple rebuilding approaches, evaluating cost efficiency, timeline projections, and insurance outcomes. The intelligent system processes data on ICF structures with concrete and steel components, comparing them against traditional wood construction methods to provide evidence-based recommendations that maximize both financial returns and insurance eligibility.`
          }
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
.queries-accordion {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.query-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.query-card:hover {
  border-color: #9333EA;
  box-shadow: 0 4px 16px rgba(147, 51, 234, 0.15);
  transform: translateY(-2px);
}

.query-card.active {
  border-color: #9333EA;
  box-shadow: 0 8px 24px rgba(147, 51, 234, 0.2);
}

.query-header {
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

.query-card.active .query-header {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
}

.query-header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.query-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3);
}

.query-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.4;
}

.query-arrow {
  width: 20px;
  height: 20px;
  color: #9333EA;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.query-arrow.rotated {
  transform: rotate(180deg);
}

.query-content {
  padding: 1.5rem;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.query-text {
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
  .query-header {
    padding: 1rem;
  }

  .query-number {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .query-title {
    font-size: 1rem;
  }

  .query-content {
    padding: 1.25rem;
  }
}
</style>
  