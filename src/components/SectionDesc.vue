<template>
    <section class="section section-with-header">
        <div class="section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="section-title-content">
                <h2 class="section-title">Understanding Your Rebuilding Options</h2>
                <p class="section-subtitle">Our AI modal calculation system transforms the overwhelming complexity of post-wildfire reconstruction into clear, actionable insights. We offer three intelligent pathways, each analyzed and optimized by our advanced calculation engine:</p>
            </div>
        </div>
        <div class="construction-desc pb-5">
            <div class="options-grid">
                <div
                    v-for="(section, index) in sections"
                    :key="index"
                    class="option-card"
                    :class="{ 'active': activeIndex === index }"
                >
                    <button
                        @click="toggleSection(index)"
                        class="option-header"
                    >
                        <div class="option-header-content">
                            <div class="option-number">{{ index + 1 }}</div>
                            <h3 class="option-title">
                                {{ section.title }}
                            </h3>
                        </div>
                        <svg
                            class="option-arrow"
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
                            class="option-content"
                        >
                            <div v-html="section.content" class="option-text"></div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'TailwindAccordion',
    data() {
      return {
        activeIndex: null,
        sections: [
          {
            title: '1. Traditional General Contractor & Architect',
            content: `Wood Structures and non fireproof construction<br>
                      <a href="javascript:void(0)" class="underline">AI calculation analysis indicates most likely to produce negative property equity</a><br>
                      Our AI calculation system compares industry-standard costs for conventional wood-frame rebuilding against our innovative, fire-resistant ICF (Insulated Concrete Form) construction. The intelligent analysis reveals that while wood remains common, our method significantly outperforms in safety, durability, and financial outcomes for wildfire-prone areas.`,
          },
          {
            title: '2. Minitensor+Owner Rep Design-Build Contract',
            content: `<a href="javascript:void(0)" class="underline">AI calculation system confirms: Produces high positive property equity</a><br>
                      Our AI-powered recommended solution combines efficiency, cost savings, and premium quality for maximum property valuation. The intelligent calculation engine processes data from thousands of projects, demonstrating that by eliminating general contractor overhead, we reinvest those funds into higher-grade materials and advanced planning tools like AI-enhanced 3D virtual modeling. Our predictive analytics show this approach reduces unexpected costs by up to 80% compared to traditional methods, while providing 24/7 AI-monitored remote site analysis and expert guidance.`,
          },
          {
            title: '3. Spec Builder or First-Time Builder Partnerships',
            content: `Minitensor+Teams has over 35 yrs of experience, now enhanced by AI calculation intelligence creating <br>
                      <a href="javascript:void(0)" class="underline">maximum property valuations and profits through predictive analytics</a><br>
                      New to construction? Our AI calculation system partners with aspiring developers through intelligent analysis of limited-term agreements, processing data on the most experienced local site superintendents and subcontractors. The AI engine handles all architecture calculations, engineering projections, material procurement optimization, and construction document analysis needed for permits. Whether it's your first project or you're expanding your portfolio, our intelligent system creates tailored packages that mitigate risk and streamline compliance through data-driven insights.`,
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
.construction-desc {
  margin-top: 2rem;
}

.options-grid {
  display: grid;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.option-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.option-card:hover {
  border-color: #9333EA;
  box-shadow: 0 4px 16px rgba(147, 51, 234, 0.15);
  transform: translateY(-2px);
}

.option-card.active {
  border-color: #9333EA;
  box-shadow: 0 8px 24px rgba(147, 51, 234, 0.2);
}

.option-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.option-card.active .option-header {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
}

.option-header-content {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex: 1;
}

.option-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
  color: white;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3);
}

.option-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.4;
}

.option-arrow {
  width: 24px;
  height: 24px;
  color: #9333EA;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.option-arrow.rotated {
  transform: rotate(180deg);
}

.option-content {
  padding: 1.5rem;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.option-text {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1rem;
}

.option-text a {
  color: #9333EA;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.option-text a:hover {
  color: #7c3aed;
  text-decoration: underline;
}

.option-text strong {
  color: #2d3748;
  font-weight: 600;
}

/* Slide down animation */
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

/* Responsive */
@media (max-width: 768px) {
  .options-grid {
    gap: 1rem;
  }

  .option-header {
    padding: 1.25rem;
  }

  .option-number {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .option-title {
    font-size: 1.1rem;
  }

  .option-content {
    padding: 1.25rem;
  }

  .option-text {
    font-size: 0.95rem;
  }
}
</style>