import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const SPECIALIZATIONS = [
  'digital_marketing',
  'content_marketing',
  'social_media_marketing',
  'brand_management',
  'search_engine_optimization',
  'b2b_marketing',
  'email_marketing',
  'market_research_and_analytics',
  'public_relations',
  'advertising_and_media_planning',
  'e-commerce_marketing',
  'influencer_marketing',
  'mobile_marketing',
  'retail_marketing',
  'customer_relationship_management',
  'product_marketing',
  'international_marketing',
  'data-driven_marketing',
  'affiliate_marketing',
  'growth_hacking',
  'video_marketing',
  'public_speaking_and_presentation_skills',
  'customer_success_marketing',
  'marketing_automation',
  'mobile_app_marketing',
  'account-based_marketing',
  'local_marketing',
  'social_media_advertising',
  'user_experience_marketing',
  'conversion_rate_optimization',
  'influencer_relations',
  'brand_strategy',
  'community_management',
  'viral_marketing',
  'customer_segmentation',
  'direct_response_marketing',
  'event_marketing',
];

const LANGUAGES = [
  'polish',
  'german',
  'french',
  'italian',
  'spanish',
  'english',
  'portuguese',
  'turkish',
  'ukrainian',
  'romanian',
  'dutch',
  'swedish',
  'norwegian',
  'danish',
  'finnish',
  'greek',
  'hungarian',
  'czech',
  'slovak',
  'russian',
];

const INDUSTRIES = [
  'e-commerce_and_electronic_commerce',
  'fashion_and_clothing',
  'real_estate_and_property_development',
  'heavy_industry_and_manufacturing',
  'logistics_and_distribution_services',
  'tourism_and_travel_services',
  'banking_and_finance',
  'technology_and_IT',
  'automotive_and_car_industry',
  'fmcg',
  'medicine_and_healthcare',
  'food_and_beverages',
  'telecommunications',
  'advertising_and_media',
  'law',
  'energy_and_sustainable_development',
  'education_and_higher_education',
  'art_and_culture',
  'sports_and_recreation',
  'gastronomy_and_hotel_services',
  'pharmacy_and_pharmaceutical_industry',
  'accounting',
  'consulting_and_advisory_services',
  'chemical_industry',
  'media_planning_and_media_buying',
  'retail_and_grocery_e-commerce',
  'aviation_and_transportation',
  'electronics_and_electrical_industry',
  'engineering_and_construction',
  'social_media_and_internet_platforms',
  'metal_and_steel_industry',
  'craftsmanship_and_unique_products',
  'research_and_development',
  'packaging_industry',
  'healthcare_services_marketing',
  'entertainment_and_digital_media',
  'film_and_television_production',
  'wood_and_furniture_industry',
  'beauty_and_cosmetic_services',
  'food_industry_and_food_processing',
  'event_services_and_event_organization',
];

const PLATFORMS = [
  'instagram',
  'youtube',
  'linkedin',
  'tiktok',
  'facebook',
  'google',
  'twitter',
  'reddit',
  'whatsapp',
  'wechat',
  'tumblr',
  'twitch',
  'pinterest',
  'vimeo',
  'quora',
  'medium',
  'yelp',
  'snapchat',
];

async function main () {
  SPECIALIZATIONS.map(async (e) => {
    await prisma.tagsspecialization.create({ data: { name: e } });
  });

  LANGUAGES.map(async (e) => {
    await prisma.tagslanguage.create({ data: { name: e } });
  });

  INDUSTRIES.map(async (e) => {
    await prisma.tagsindustry.create({ data: { name: e } });
  });

  PLATFORMS.map(async (e) => {
    await prisma.tagsplatform.create({ data: { name: e } });
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