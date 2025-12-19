<template>
    <section class="radio-section section-with-header">
        <div class="section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M9 9H15M9 12H15M9 15H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="7" cy="7" r="1" fill="currentColor"/>
                    <circle cx="7" cy="12" r="1" fill="currentColor"/>
                    <circle cx="7" cy="17" r="1" fill="currentColor"/>
                </svg>
            </div>
            <div class="section-title-content">
                <h2 class="section-title">Minitensor Design Packages</h2>
                <p class="section-subtitle">Choose from our AI-optimized design package options</p>
            </div>
        </div>
        <div class="packages-grid">
            <label class="package-option" for="high">
                <input type="radio" id="high" name="fav_language" value="high" checked>
                <div class="package-option-content">
                    <div class="package-option-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 8V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="package-option-text">
                        <span class="package-option-name">Minitensor 1</span>
                        <span class="package-option-desc">Standard Package</span>
                    </div>
                </div>
            </label>
            <label class="package-option" for="mid">
                <input type="radio" id="mid" name="fav_language" value="mid">
                <div class="package-option-content">
                    <div class="package-option-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 8V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="package-option-text">
                        <span class="package-option-name">Minitensor 2</span>
                        <span class="package-option-desc">Premium Package</span>
                    </div>
                </div>
            </label>
            <label class="package-option" for="low">
                <input type="radio" id="low" name="fav_language" value="low">
                <div class="package-option-content">
                    <div class="package-option-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 8V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="package-option-text">
                        <span class="package-option-name">Minitensor 3</span>
                        <span class="package-option-desc">Ultimate Package</span>
                    </div>
                </div>
            </label>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.package-option {
  position: relative;
  cursor: pointer;
  display: block;
}

.package-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.package-option-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.package-option:hover .package-option-content {
  border-color: #9333EA;
  box-shadow: 0 4px 16px rgba(147, 51, 234, 0.15);
  transform: translateY(-2px);
}

.package-option input[type="radio"]:checked + .package-option-content {
  border-color: #9333EA;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
  box-shadow: 0 4px 16px rgba(147, 51, 234, 0.2);
}

.package-option-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border-radius: 10px;
  color: #9333EA;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.package-option input[type="radio"]:checked + .package-option-content .package-option-icon {
  background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3);
}

.package-option-icon svg {
  width: 24px;
  height: 24px;
}

.package-option-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.package-option-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
}

.package-option-desc {
  font-size: 0.875rem;
  color: #718096;
}

.package-option input[type="radio"]:checked + .package-option-content .package-option-name {
  color: #9333EA;
}

@media (max-width: 768px) {
  .packages-grid {
    grid-template-columns: 1fr;
  }

  .package-option-content {
    padding: 1rem;
  }

  .package-option-icon {
    width: 40px;
    height: 40px;
  }

  .package-option-icon svg {
    width: 20px;
    height: 20px;
  }
}
</style>