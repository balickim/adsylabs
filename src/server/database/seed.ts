import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const SPECIALIZATIONS = [
  'brand_management',
  'data-driven_marketing',
  'email_marketing',
  'advertising_and_media_planning',
  'customer_relationship_management',
  'b2b_marketing',
  'content_marketing',
  'social_media_marketing',
  'retail_marketing',
  'mobile_marketing',
  'market_research_and_analytics',
  'e-commerce_marketing',
  'influencer_marketing',
  'product_marketing',
  'search_engine_optimization',
  'international_marketing',
  'digital_marketing',
  'public_relations',
  'affiliate_marketing',
  'video_marketing',
  'growth_hacking',
  'public_speaking_and_presentation_skills',
  'mobile_app_marketing',
  'marketing_automation',
  'customer_success_marketing',
  'account-based_marketing',
  'local_marketing',
  'social_media_advertising',
  'influencer_relations',
  'conversion_rate_optimization',
  'brand_strategy',
  'user_experience_marketing',
  'community_management',
  'viral_marketing',
  'customer_segmentation',
  'direct_response_marketing',
  'event_marketing',
];

const LANGUAGES = [
  'polish',
  'french',
  'italian',
  'german',
  'spanish',
  'english',
  'turkish',
  'portuguese',
  'romanian',
  'ukrainian',
  'dutch',
  'norwegian',
  'swedish',
  'danish',
  'finnish',
  'greek',
  'czech',
  'hungarian',
  'slovak',
  'russian',
];

const INDUSTRIES = [
  'e-commerce_and_electronic_commerce',
  'real_estate_and_property_development',
  'advertising_and_media',
  'pharmacy_and_pharmaceutical_industry',
  'entertainment_and_digital_media',
  'craftsmanship_and_unique_products',
  'logistics_and_distribution_services',
  'gastronomy_and_hotel_services',
  'research_and_development',
  'fashion_and_clothing',
  'chemical_industry',
  'event_services_and_event_organization',
  'banking_and_finance',
  'sports_and_recreation',
  'healthcare_services_marketing',
  'automotive_and_car_industry',
  'consulting_and_advisory_services',
  'technology_and_IT',
  'accounting',
  'wood_and_furniture_industry',
  'tourism_and_travel_services',
  'media_planning_and_media_buying',
  'beauty_and_cosmetic_services',
  'fmcg',
  'retail_and_grocery_e-commerce',
  'food_industry_and_food_processing',
  'medicine_and_healthcare',
  'aviation_and_transportation',
  'food_and_beverages',
  'electronics_and_electrical_industry',
  'telecommunications',
  'engineering_and_construction',
  'law',
  'social_media_and_internet_platforms',
  'education_and_higher_education',
  'metal_and_steel_industry',
  'art_and_culture',
  'film_and_television_production',
  'heavy_industry_and_manufacturing',
  'energy_and_sustainable_development',
  'packaging_industry',
];

const PLATFORMS = [
  'youtube',
  'instagram',
  'linkedin',
  'tiktok',
  'facebook',
  'google',
  'reddit',
  'twitter',
  'tumblr',
  'whatsapp',
  'twitch',
  'wechat',
  'vimeo',
  'quora',
  'medium',
  'yelp',
  'snapchat',
  'pinterest',
];

async function main () {
  SPECIALIZATIONS.map(async (e, index) => {
    await prisma.tagsspecialization.create({ data: { id: index, name: e } });
  });

  LANGUAGES.map(async (e, index) => {
    await prisma.tagslanguage.create({ data: { id: index, name: e } });
  });

  INDUSTRIES.map(async (e, index) => {
    await prisma.tagsindustry.create({ data: { id: index, name: e } });
  });

  PLATFORMS.map(async (e, index) => {
    await prisma.tagsplatform.create({ data: { id: index, name: e } });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });