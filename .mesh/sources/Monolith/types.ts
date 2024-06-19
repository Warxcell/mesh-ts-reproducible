// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MonolithTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Decimal: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Date: { input: any; output: any; }
  Time: { input: any; output: any; }
  Email: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Uri: { input: any; output: any; }
  Void: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
  Country: { input: any; output: any; }
  CountrySubdivision: { input: any; output: any; }
  Currency: { input: any; output: any; }
  Locale: { input: any; output: any; }
};

export type RecommendedRingSize = {
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  ringSize: RingSize;
};


export type RecommendedRingSizelabelArgs = {
  region: RegionCode;
  locale: Scalars['Locale']['input'];
};

export type RingSize = {
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
};


export type RingSizelabelArgs = {
  region: RegionCode;
};

export type RingSizeInput = {
  ringSizeId?: InputMaybe<Scalars['ID']['input']>;
  recommendedRingSizeId?: InputMaybe<Scalars['ID']['input']>;
};

export type RingSizeOrRecommendedRingSize = RingSize | RecommendedRingSize;

export type BookingConsultationPurposeCode =
  | 'ENGAGEMENT_RING'
  | 'RESIZE'
  | 'COLLECTION'
  | 'WEDDING_RING'
  | 'INSPECTION'
  | 'REPAIR'
  | 'FULL_SERVICE'
  | 'OTHER'
  | 'QUICK_COLLECTION';

export type BookingConsultationPurpose = {
  /** @deprecated systemCode */
  id: Scalars['ID']['output'];
  systemCode: BookingConsultationPurposeCode;
  name: Scalars['String']['output'];
  type: BookingConsultationType;
  methods: Array<BookingConsultationMethod>;
  icon?: Maybe<Asset>;
  /** Duration in minutes */
  duration: Scalars['Int']['output'];
  requireConsultant: Scalars['Boolean']['output'];
  slotLengthInMinutes: Scalars['Int']['output'];
  takesRoom: Scalars['Boolean']['output'];
};

export type BookingConsultationTypeCode =
  | 'SALES'
  | 'AFTERCARE'
  | 'COLLECTION';

export type BookingConsultationType = {
  systemCode: BookingConsultationTypeCode;
  name?: Maybe<Scalars['String']['output']>;
};

export type BookingConsultationMethodCode =
  | 'IN_PERSON'
  | 'BY_PHONE'
  | 'VIRTUAL';

export type BookingConsultationMethod = {
  systemCode: BookingConsultationMethodCode;
  name: Scalars['String']['output'];
  icon?: Maybe<Asset>;
  /** @deprecated systemCode */
  id: Scalars['ID']['output'];
  takesRoom: Scalars['Boolean']['output'];
  isVirtual: Scalars['Boolean']['output'];
};

export type BookingConsultationComplexityCode =
  | 'VIEW_DESIGNS'
  | 'DISCUSS_DESIGNS'
  | 'NOT_SURE';

export type BookingConsultationComplexity = {
  systemCode: BookingConsultationComplexityCode;
  translation: BookingConsultationComplexityTranslation;
  icon?: Maybe<Asset>;
};


export type BookingConsultationComplexitytranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type BookingConsultationComplexityTranslation = {
  locale: Scalars['Locale']['output'];
  name: Scalars['String']['output'];
};

export type BookingCancelConsultationInput = {
  id: Scalars['ID']['input'];
};

export type BookingConsultationSlotsResponse = {
  slots: Array<BookingConsultationSlot>;
};

export type BookingConsultationSlot = {
  showroom: Showroom;
  startTime: Scalars['DateTime']['output'];
};

export type BookingConsultationSlotInput = {
  purpose: BookingConsultationPurposeCode;
  method: BookingConsultationMethodCode;
  consultant: BookingSystemConsultant;
  region: RegionCode;
  order?: InputMaybe<Scalars['ID']['input']>;
};

export type BookingCreateConsultationNewCustomerResponse = BookingCreateConsultationSuccessNewCustomer | BookingCreateConsultationErrorNoAvailableConsultants;

export type BookingCreateConsultationExistingCustomerResponse = BookingCreateConsultationSuccessExistingCustomer | BookingCreateConsultationErrorNoAvailableConsultants;

export type BookingCreateConsultationSuccessNewCustomer = {
  customerRegistrationResponse: CustomerRegistrationResponse;
  consultation: BookingConsultation;
};

export type BookingCreateConsultationSuccessExistingCustomer = {
  consultation: BookingConsultation;
};

export type BookingCreateConsultationErrorNoAvailableConsultants = {
  message: Scalars['String']['output'];
};


export type BookingCreateConsultationErrorNoAvailableConsultantsmessageArgs = {
  locale: Scalars['Locale']['input'];
};

export type BookingSystemConsultant =
  | 'ALL'
  | 'OWN';

export type BookingCreateConsultationInput = {
  purpose: BookingConsultationPurposeCode;
  method: BookingConsultationMethodCode;
  startTime: Scalars['DateTime']['input'];
  showroom: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  consultant: BookingSystemConsultant;
  /** Required if purpose's type's code is SALES */
  salesConsultation?: InputMaybe<BookingCreateConsultationSalesConsultationInput>;
  /** Required if purpose's type's code is AFTERCARE */
  aftercareConsultation?: InputMaybe<BookingCreateConsultationAftercareConsultationInput>;
  phone?: InputMaybe<PhoneNumberInput>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
  uri: Scalars['Uri']['input'];
  baseInput?: InputMaybe<EnquiryBaseInput>;
};

export type BookingCreateConsultationSalesConsultationInput = {
  complexity: BookingConsultationComplexityCode;
};

export type BookingCreateConsultationAftercareConsultationInput = {
  order: Scalars['ID']['input'];
};

export type BookingConsultation = {
  id: Scalars['ID']['output'];
  purpose: BookingConsultationPurpose;
  method: BookingConsultationMethod;
  description?: Maybe<Scalars['String']['output']>;
  showroom: Showroom;
  startsAt: Scalars['DateTime']['output'];
  isCancelled: Scalars['Boolean']['output'];
  canBeCancelled: Scalars['Boolean']['output'];
  customer?: Maybe<Customer>;
  consultant?: Maybe<Consultant>;
  state: BookingConsultationState;
  note?: Maybe<Scalars['String']['output']>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  consultationRoom?: Maybe<BookingConsultationRoom>;
  order?: Maybe<Order>;
};

export type BookingConsultationRoomKind =
  | 'CONSULTATION'
  | 'RECEPTION';

export type BookingConsultationRoom = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  kind: BookingConsultationRoomKind;
};

export type BookingInPersonConsultationRoom = BookingConsultationRoom & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  kind: BookingConsultationRoomKind;
};

export type BookingVirtualConsultationRoom = BookingConsultationRoom & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  kind: BookingConsultationRoomKind;
};

export type BookingConsultationState =
  | 'OPEN'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'NO_SHOW';

export type BookingConsultationTransition =
  | 'INITIALISE'
  | 'COMPLETE'
  | 'CANCEL'
  | 'NO_SHOW';

export type BookingConsultationMutableFields = {
  startTime: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  consultant?: InputMaybe<Scalars['ID']['input']>;
  showroom: Scalars['ID']['input'];
  consultationRoomKind?: InputMaybe<BookingConsultationRoomKind>;
};

export type BookingConsultationAvailableDate = {
  date: Scalars['DateTime']['output'];
  consultationAvailableShowrooms: Array<BookingConsultationAvailableShowroom>;
};

export type BookingConsultationAvailableShowroom = {
  consultationSlots?: Maybe<Array<Maybe<BookingConsultationSlot>>>;
};

export type CatalogueImage = {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  sources: Array<ImageSrc>;
  size: ImageSize;
};


export type CatalogueImagesizeArgs = {
  name: ImageSizeName;
};

export type CatalogueJewellery = {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  customTitleTag?: Maybe<Scalars['String']['output']>;
  relatedProducts: Array<CatalogueProduct>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images: Array<CatalogueImage>;
  isReturnable: Scalars['Boolean']['output'];
  deliveryDays: Scalars['Int']['output'];
  salePrice: SalePrice;
  primaryMetal: Metal;
  images360: Array<GenericImage>;
  video?: Maybe<CatalogueVideo>;
  mainImage?: Maybe<GenericImage>;
  designStyles: Array<JewelleryDesignStyleLabel>;
  designFeatures: Array<JewelleryDesignFeatureLabel>;
  gemstones: Array<JewelleryGemstoneLabel>;
  engravingDisabled: Scalars['Boolean']['output'];
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueJewellerysalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueAggregate = {
  count: Scalars['Int']['output'];
};

export type CatalogueJewelleriesFilters = {
  price: CataloguePriceRangeFilter;
  primaryMetals: Array<CatalogueFilterMetalItem>;
  designStyles: Array<CatalogueFilterJewelleryDesignStyleLabel>;
  designFeatures: Array<CatalogueFilterJewelleryDesignFeatureLabel>;
  gemstones: Array<CatalogueFilterJewelleryGemstoneLabel>;
};


export type CatalogueJewelleriesFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueJewelleriesFiltersVariation = {
  primaryMetal?: Maybe<MetalCode>;
  designStyle?: Maybe<JewelleryDesignStyle>;
  designFeature?: Maybe<JewelleryDesignFeature>;
  gemstone?: Maybe<JewelleryGemstoneCode>;
};

export type CatalogueJewelleriesNecklacesFiltersVariation = {
  primaryMetal?: Maybe<MetalCode>;
  designStyle?: Maybe<JewelleryDesignStyle>;
  designFeature?: Maybe<JewelleryDesignFeature>;
  gemstone?: Maybe<JewelleryGemstoneCode>;
  productStyle?: Maybe<JewelleryNecklaceProductStyle>;
};

export type CatalogueJewelleriesEarringsFiltersVariation = {
  primaryMetal?: Maybe<MetalCode>;
  designStyle?: Maybe<JewelleryDesignStyle>;
  designFeature?: Maybe<JewelleryDesignFeature>;
  gemstone?: Maybe<JewelleryGemstoneCode>;
  productStyle?: Maybe<JewelleryEarringsProductStyle>;
};

export type CatalogueJewelleriesBraceletsFiltersVariation = {
  primaryMetal?: Maybe<MetalCode>;
  designStyle?: Maybe<JewelleryDesignStyle>;
  designFeature?: Maybe<JewelleryDesignFeature>;
  gemstone?: Maybe<JewelleryGemstoneCode>;
  productStyle?: Maybe<JewelleryBraceletProductStyle>;
};

export type CatalogueJewelleryNecklacesFilters = {
  price: CataloguePriceRangeFilter;
  primaryMetals: Array<CatalogueFilterMetalItem>;
  designStyles: Array<CatalogueFilterJewelleryDesignStyleLabel>;
  designFeatures: Array<CatalogueFilterJewelleryDesignFeatureLabel>;
  productStyles: Array<CatalogueFilterJewelleryNecklaceProductStyleLabel>;
  gemstones: Array<CatalogueFilterJewelleryGemstoneLabel>;
};


export type CatalogueJewelleryNecklacesFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueJewelleryBraceletsFilters = {
  price: CataloguePriceRangeFilter;
  primaryMetals: Array<CatalogueFilterMetalItem>;
  designStyles: Array<CatalogueFilterJewelleryDesignStyleLabel>;
  designFeatures: Array<CatalogueFilterJewelleryDesignFeatureLabel>;
  productStyles: Array<CatalogueFilterJewelleryBraceletProductStyleLabel>;
  gemstones: Array<CatalogueFilterJewelleryGemstoneLabel>;
};


export type CatalogueJewelleryBraceletsFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueJewelleryEarringsFilters = {
  price: CataloguePriceRangeFilter;
  primaryMetals: Array<CatalogueFilterMetalItem>;
  designStyles: Array<CatalogueFilterJewelleryDesignStyleLabel>;
  designFeatures: Array<CatalogueFilterJewelleryDesignFeatureLabel>;
  productStyles: Array<CatalogueFilterJewelleryEarringsProductStyleLabel>;
  gemstones: Array<CatalogueFilterJewelleryGemstoneLabel>;
};


export type CatalogueJewelleryEarringsFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueFilterJewelleryDesignStyleLabel = {
  label: JewelleryDesignStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterJewelleryDesignFeatureLabel = {
  label: JewelleryDesignFeatureLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterJewelleryGemstoneLabel = {
  label: JewelleryGemstoneLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterJewelleryNecklaceProductStyleLabel = {
  label: JewelleryNecklaceProductStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterJewelleryBraceletProductStyleLabel = {
  label: JewelleryBraceletProductStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterJewelleryEarringsProductStyleLabel = {
  label: JewelleryEarringsProductStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueJewelleriesFilterInput = {
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  designStyles?: InputMaybe<Array<JewelleryDesignStyle>>;
  designFeatures?: InputMaybe<Array<JewelleryDesignFeature>>;
  gemstones?: InputMaybe<Array<JewelleryGemstoneCode>>;
};

export type CatalogueJewelleryFilterInput = {
  name: Scalars['String']['input'];
  primaryMetalCode: MetalCode;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogueJewelleriesNecklacesFilterInput = {
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  designStyles?: InputMaybe<Array<JewelleryDesignStyle>>;
  designFeatures?: InputMaybe<Array<JewelleryDesignFeature>>;
  productStyles?: InputMaybe<Array<JewelleryNecklaceProductStyle>>;
  gemstones?: InputMaybe<Array<JewelleryGemstoneCode>>;
};

export type CatalogueJewelleriesEarringsFilterInput = {
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  designStyles?: InputMaybe<Array<JewelleryDesignStyle>>;
  designFeatures?: InputMaybe<Array<JewelleryDesignFeature>>;
  productStyles?: InputMaybe<Array<JewelleryEarringsProductStyle>>;
  gemstones?: InputMaybe<Array<JewelleryGemstoneCode>>;
};

export type CatalogueJewelleriesBraceletsFilterInput = {
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  designStyles?: InputMaybe<Array<JewelleryDesignStyle>>;
  designFeatures?: InputMaybe<Array<JewelleryDesignFeature>>;
  productStyles?: InputMaybe<Array<JewelleryBraceletProductStyle>>;
  gemstones?: InputMaybe<Array<JewelleryGemstoneCode>>;
};

export type CatalogueJewelleryNecklace = CatalogueProduct & CatalogueJewellery & {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix: Scalars['String']['output'];
  customTitleTag?: Maybe<Scalars['String']['output']>;
  relatedProducts: Array<CatalogueJewelleryNecklace>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images: Array<CatalogueImage>;
  isReturnable: Scalars['Boolean']['output'];
  deliveryDays: Scalars['Int']['output'];
  salePrice: SalePrice;
  primaryMetal: Metal;
  variations: Array<CatalogueJewelleryNecklace>;
  images360: Array<GenericImage>;
  video?: Maybe<CatalogueVideo>;
  mainImage?: Maybe<GenericImage>;
  translation: CatalogueJewelleryNecklaceTranslation;
  designStyles: Array<JewelleryDesignStyleLabel>;
  designFeatures: Array<JewelleryDesignFeatureLabel>;
  gemstones: Array<JewelleryGemstoneLabel>;
  productStyles: Array<JewelleryNecklaceProductStyleLabel>;
  engravingDisabled: Scalars['Boolean']['output'];
  firstAvailableDeliveryDate: DeliveryDate;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueJewelleryNecklacesalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryNecklacetranslationArgs = {
  locale: Scalars['Locale']['input'];
};


export type CatalogueJewelleryNecklacefirstAvailableDeliveryDateArgs = {
  region: RegionCode;
  hasEngraving: Scalars['Boolean']['input'];
};


export type CatalogueJewelleryNecklacefinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryNecklacefinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueJewelleryNecklaceTranslation = {
  description?: Maybe<Scalars['String']['output']>;
  seoText?: Maybe<Scalars['String']['output']>;
};

export type CatalogueJewelleryEarrings = CatalogueProduct & CatalogueJewellery & {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix: Scalars['String']['output'];
  customTitleTag?: Maybe<Scalars['String']['output']>;
  relatedProducts: Array<CatalogueJewelleryEarrings>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images: Array<CatalogueImage>;
  isReturnable: Scalars['Boolean']['output'];
  deliveryDays: Scalars['Int']['output'];
  salePrice: SalePrice;
  primaryMetal: Metal;
  variations: Array<CatalogueJewelleryEarrings>;
  images360: Array<GenericImage>;
  video?: Maybe<CatalogueVideo>;
  mainImage?: Maybe<GenericImage>;
  translation: CatalogueJewelleryEarringsTranslation;
  designStyles: Array<JewelleryDesignStyleLabel>;
  designFeatures: Array<JewelleryDesignFeatureLabel>;
  gemstones: Array<JewelleryGemstoneLabel>;
  productStyles: Array<JewelleryEarringsProductStyleLabel>;
  engravingDisabled: Scalars['Boolean']['output'];
  firstAvailableDeliveryDate: DeliveryDate;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueJewelleryEarringssalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryEarringstranslationArgs = {
  locale: Scalars['Locale']['input'];
};


export type CatalogueJewelleryEarringsfirstAvailableDeliveryDateArgs = {
  region: RegionCode;
  hasEngraving: Scalars['Boolean']['input'];
};


export type CatalogueJewelleryEarringsfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryEarringsfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueJewelleryEarringsTranslation = {
  description?: Maybe<Scalars['String']['output']>;
  seoText?: Maybe<Scalars['String']['output']>;
};

export type CatalogueJewelleryBracelet = CatalogueProduct & CatalogueJewellery & {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix: Scalars['String']['output'];
  customTitleTag?: Maybe<Scalars['String']['output']>;
  relatedProducts: Array<CatalogueJewelleryBracelet>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images: Array<CatalogueImage>;
  isReturnable: Scalars['Boolean']['output'];
  deliveryDays: Scalars['Int']['output'];
  salePrice: SalePrice;
  primaryMetal: Metal;
  variations: Array<CatalogueJewelleryBracelet>;
  images360: Array<GenericImage>;
  video?: Maybe<CatalogueVideo>;
  mainImage?: Maybe<GenericImage>;
  translation: CatalogueJewelleryBraceletTranslation;
  designStyles: Array<JewelleryDesignStyleLabel>;
  designFeatures: Array<JewelleryDesignFeatureLabel>;
  gemstones: Array<JewelleryGemstoneLabel>;
  productStyles: Array<JewelleryBraceletProductStyleLabel>;
  engravingDisabled: Scalars['Boolean']['output'];
  firstAvailableDeliveryDate: DeliveryDate;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueJewelleryBraceletsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryBracelettranslationArgs = {
  locale: Scalars['Locale']['input'];
};


export type CatalogueJewelleryBraceletfirstAvailableDeliveryDateArgs = {
  region: RegionCode;
  hasEngraving: Scalars['Boolean']['input'];
};


export type CatalogueJewelleryBraceletfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueJewelleryBraceletfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueJewelleryBraceletTranslation = {
  description?: Maybe<Scalars['String']['output']>;
  seoText?: Maybe<Scalars['String']['output']>;
};

export type CatalogueEngagementRingFilterInput = {
  name: Scalars['String']['input'];
  primaryMetalCode?: InputMaybe<MetalCode>;
  centreStoneShape: StoneShapeCode;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogueEngagementRingContainsProductsInput = {
  shape: StoneShapeCode;
};

export type CatalogueSortInput = {
  currency: CurrencyInput;
  by?: CatalogueSortOrder;
};

export type CatalogueReadyToGoRingFilterInput = {
  name: Scalars['String']['input'];
  primaryMetalCode: MetalCode;
};

export type CatalogueReadyToGoRingsFilterInput = {
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  readyToShip?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogueFiltersPriceInput = {
  currency: CurrencyInput;
  region: RegionCode;
};

export type CatalogueReadyToGoRingFilters = {
  primaryMetals: Array<CatalogueFilterMetalItem>;
  price: CataloguePriceRangeFilter;
};


export type CatalogueReadyToGoRingFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueReadyToGoRing = CatalogueProduct & {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  customTitleTag?: Maybe<Scalars['String']['output']>;
  relatedProducts: Array<CatalogueReadyToGoRing>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  translation: CatalogueReadyToGoRingTranslation;
  images: Array<CatalogueImage>;
  isReturnable: Scalars['Boolean']['output'];
  deliveryDays: Scalars['Int']['output'];
  salePrice: SalePrice;
  primaryMetal: Metal;
  carat?: Maybe<Scalars['Float']['output']>;
  gemType: GemType;
  sizes: Array<RecommendedRingSize>;
  variations: Array<CatalogueReadyToGoRing>;
  sku: Scalars['String']['output'];
  isReadyToShip: Scalars['Boolean']['output'];
  mainImage?: Maybe<GenericImage>;
  firstAvailableDeliveryDate: DeliveryDate;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueReadyToGoRingtranslationArgs = {
  locale: Scalars['Locale']['input'];
};


export type CatalogueReadyToGoRingsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueReadyToGoRingfirstAvailableDeliveryDateArgs = {
  region: RegionCode;
};


export type CatalogueReadyToGoRingfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueReadyToGoRingfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueReadyToGoRingTranslation = {
  description?: Maybe<Scalars['String']['output']>;
  seoText?: Maybe<Scalars['String']['output']>;
};

export type CatalogueEngagementRingFilters = {
  price: CataloguePriceRangeFilter;
  primaryMetals: Array<CatalogueFilterMetalItem>;
  centreStoneShapes: Array<CatalogueFilterShapeItem>;
  ringStyles: Array<CatalogueFilterEngagementRingStylesItem>;
  designStyles: Array<CatalogueFilterEngagementRingDesingStyleItem>;
  designFeatures: Array<CatalogueFilterEngagementRingDesignFeatureItem>;
};


export type CatalogueEngagementRingFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueEngagementRingFiltersVariation = {
  primaryMetal?: Maybe<MetalCode>;
  centreStoneShape?: Maybe<StoneShapeCode>;
  ringStyle?: Maybe<EngagementRingStyleLabelCode>;
  designStyle?: Maybe<EngagementRingDesignStyleLabelCode>;
  designFeature?: Maybe<EngagementRingDesignFeatureLabelCode>;
};

export type CatalogueWeddingRingFilters = {
  primaryMetals: Array<CatalogueFilterMetalItem>;
  price: CataloguePriceRangeFilter;
  categories: Array<CatalogueFilterWeddingRingCategoriesItem>;
  ringStyles: Array<CatalogueFilterWeddingRingStylesItem>;
};


export type CatalogueWeddingRingFilterspriceArgs = {
  input: CatalogueFiltersPriceInput;
};

export type CatalogueWeddingRingFiltersVariation = {
  primaryMetal?: Maybe<MetalCode>;
  category?: Maybe<WeddingRingCategoryLabelCode>;
  ringStyle?: Maybe<WeddingRingStyleLabelCode>;
};

export type CatalogueFilterInput = {
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogueProduct = {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  customTitleTag?: Maybe<Scalars['String']['output']>;
  relatedProducts: Array<CatalogueProduct>;
  images: Array<CatalogueImage>;
  isReturnable: Scalars['Boolean']['output'];
  deliveryDays: Scalars['Int']['output'];
  salePrice: SalePrice;
  primaryMetal: Metal;
  mainImage?: Maybe<GenericImage>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueProductsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueProductfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueProductfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type SalePrice = {
  total: Money;
  gst?: Maybe<Gst>;
};

export type GstType =
  | 'SALES'
  | 'VAT';

export type Gst = {
  type: GstType;
  price: Money;
};

export type CatalogueVideo = {
  uri: Scalars['Uri']['output'];
  type: Scalars['String']['output'];
};

export type CatalogueEngagementRing = CatalogueProduct & {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  customTitleTag?: Maybe<Scalars['String']['output']>;
  ringStyles: Array<EngagementRingStyleLabel>;
  designStyle: EngagementRingDesignStyleLabel;
  designFeatures: Array<EngagementRingDesignFeatureLabel>;
  relatedProducts: Array<CatalogueEngagementRing>;
  images360: Array<GenericImage>;
  mainImage?: Maybe<GenericImage>;
  video?: Maybe<CatalogueVideo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images: Array<CatalogueImage>;
  primaryMetal: Metal;
  signatureStone?: Maybe<Melee>;
  meleeItems: Array<CatalogueMelee>;
  centreStoneConstraints: CatalogueEngagementRingCentreStoneConstraints;
  deliveryDays: Scalars['Int']['output'];
  bandWidth: Scalars['Float']['output'];
  bandThickness: Scalars['Float']['output'];
  isReturnable: Scalars['Boolean']['output'];
  isResizeable: Scalars['Boolean']['output'];
  isAvailableForRingBuilder: Scalars['Boolean']['output'];
  salePrice: SalePrice;
  translation: CatalogueEngagementRingTranslation;
  variations: Array<CatalogueEngagementRing>;
  sizes: Array<RingSizeOrRecommendedRingSize>;
  signatureStones: Array<CatalogueEngagementRingSignatureStone>;
  firstAvailableDeliveryDate: DeliveryDate;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueEngagementRingsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueEngagementRingtranslationArgs = {
  locale: Scalars['Locale']['input'];
};


export type CatalogueEngagementRingsizesArgs = {
  region: RegionCode;
};


export type CatalogueEngagementRingfirstAvailableDeliveryDateArgs = {
  region: RegionCode;
  hasEngraving: Scalars['Boolean']['input'];
};


export type CatalogueEngagementRingfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueEngagementRingfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueEngagementRingSignatureStone = {
  id: Scalars['ID']['output'];
  image: Scalars['Uri']['output'];
  price: Money;
  color: StoneColor;
  crystal: StoneCrystal;
  width: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
};


export type CatalogueEngagementRingSignatureStonepriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueEngagementRingSignatureStoneInput = {
  color: StoneColorCode;
  crystal: StoneCrystalCode;
  width: Scalars['String']['input'];
};

export type CatalogueEngagementRingCentreStoneConstraints = {
  weight: CatalogueEngagementRingCentreStoneWeightConstraint;
  shape: StoneShape;
};

export type CatalogueEngagementRingCentreStoneWeightConstraint = {
  min: Scalars['Decimal']['output'];
  max: Scalars['Decimal']['output'];
};

export type CatalogueWeddingRing = CatalogueProduct & {
  catalogueCode: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  customTitleTag?: Maybe<Scalars['String']['output']>;
  categories: Array<WeddingRingCategoryLabel>;
  ringStyles: Array<WeddingRingStyleLabel>;
  relatedProducts: Array<CatalogueWeddingRing>;
  images360: Array<GenericImage>;
  video?: Maybe<CatalogueVideo>;
  mainImage?: Maybe<GenericImage>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  images: Array<CatalogueImage>;
  primaryMetal: Metal;
  signatureStone?: Maybe<Melee>;
  meleeItems: Array<CatalogueMelee>;
  deliveryDays: Scalars['Int']['output'];
  bandWidth: Scalars['Float']['output'];
  bandThickness: Scalars['Float']['output'];
  bandType?: Maybe<CatalogueBandType>;
  isReturnable: Scalars['Boolean']['output'];
  isResizeable: Scalars['Boolean']['output'];
  salePrice: SalePrice;
  translation: CatalogueWeddingRingTranslation;
  variations: Array<CatalogueWeddingRing>;
  sizes: Array<RingSizeOrRecommendedRingSize>;
  firstAvailableDeliveryDate: DeliveryDate;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
};


export type CatalogueWeddingRingsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueWeddingRingtranslationArgs = {
  locale: Scalars['Locale']['input'];
};


export type CatalogueWeddingRingsizesArgs = {
  region: RegionCode;
};


export type CatalogueWeddingRingfirstAvailableDeliveryDateArgs = {
  region: RegionCode;
  hasEngraving: Scalars['Boolean']['input'];
};


export type CatalogueWeddingRingfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type CatalogueWeddingRingfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type CatalogueBandType = {
  id: Scalars['ID']['output'];
  translation: CatalogueBandTypeTranslation;
};


export type CatalogueBandTypetranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type CatalogueBandTypeTranslation = {
  name: Scalars['String']['output'];
};

export type CatalogueMelee = {
  melee: Melee;
  quantity: Scalars['Int']['output'];
};

export type CatalogueEngagementRingTranslation = {
  locale: Scalars['Locale']['output'];
  description?: Maybe<Scalars['String']['output']>;
  seoText?: Maybe<Scalars['String']['output']>;
};

export type CatalogueWeddingRingTranslation = {
  locale: Scalars['Locale']['output'];
  description?: Maybe<Scalars['String']['output']>;
  seoText?: Maybe<Scalars['String']['output']>;
};

export type CatalogueFilterPriceInput = {
  currency: CurrencyInput;
  region: RegionCode;
  min?: InputMaybe<Scalars['Decimal']['input']>;
  max?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CatalogueSortOrder =
  | 'RECOMMENDED'
  | 'PRICE_ASCENDING'
  | 'PRICE_DESCENDING';

export type CatalogueEngagementRingsFilterInput = {
  price?: InputMaybe<CatalogueFilterPriceInput>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  centreStoneShapes?: InputMaybe<Array<StoneShapeCode>>;
  ringStyles?: InputMaybe<Array<EngagementRingStyleLabelCode>>;
  designStyles?: InputMaybe<Array<EngagementRingDesignStyleLabelCode>>;
  designFeatures?: InputMaybe<Array<EngagementRingDesignFeatureLabelCode>>;
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogueWeddingRingFilterInput = {
  price?: InputMaybe<CatalogueFilterPriceInput>;
  includeHiddenFromProductList?: InputMaybe<Scalars['Boolean']['input']>;
  primaryMetalCodes?: InputMaybe<Array<MetalCode>>;
  categories?: InputMaybe<Array<WeddingRingCategoryLabelCode>>;
  ringStyles?: InputMaybe<Array<WeddingRingStyleLabelCode>>;
  catalogueCode?: InputMaybe<Scalars['ID']['input']>;
  catalogueCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type PriceRangeBarInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type CataloguePriceRangeFilter = {
  currentRange: CataloguePriceRange;
  absoluteRange: CataloguePriceRange;
  bars: Array<CataloguePriceRangeBar>;
};


export type CataloguePriceRangeFilterbarsArgs = {
  input: PriceRangeBarInput;
};

export type CataloguePriceRangeBar = {
  range: CataloguePriceRange;
  totalResults: Scalars['Int']['output'];
};

export type CataloguePriceRange = {
  min: Money;
  max: Money;
};

export type CatalogueFilterShapeItem = {
  shape: StoneShape;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterMetalItem = {
  metal: Metal;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterEngagementRingStylesItem = {
  label: EngagementRingStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterEngagementRingDesingStyleItem = {
  label: EngagementRingDesignStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterEngagementRingDesignFeatureItem = {
  label: EngagementRingDesignFeatureLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterWeddingRingCategoriesItem = {
  label: WeddingRingCategoryLabel;
  totalResults: Scalars['Int']['output'];
};

export type CatalogueFilterWeddingRingStylesItem = {
  label: WeddingRingStyleLabel;
  totalResults: Scalars['Int']['output'];
};

export type CommissionJunctionInput = {
  code: Scalars['String']['input'];
};

export type Consultant = {
  id: Scalars['ID']['output'];
  firstName: Scalars['String']['output'];
  /** @deprecated use avatarImage */
  avatar: Scalars['Uri']['output'];
  avatarImage: GenericImage;
  user: User;
  canTakeConsultations: Scalars['Boolean']['output'];
  showroom?: Maybe<Showroom>;
};

export type Query = {
  ping: Scalars['String']['output'];
  bookingConsultationPurposes: Array<BookingConsultationPurpose>;
  bookingConsultationComplexities: Array<BookingConsultationComplexity>;
  bookingConsultationAvailableSlots: BookingConsultationSlotsResponse;
  /** If this returns true: prompt user for phone */
  bookingConsultationShowPhone: Scalars['Boolean']['output'];
  validateConsultationInput: Scalars['Boolean']['output'];
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingConsultation?: Maybe<BookingConsultation>;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingConsultants: Array<Consultant>;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingShowrooms: Array<Showroom>;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingCustomer: Customer;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingAvailableTransitions: Array<Maybe<BookingConsultationTransition>>;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingInPersonConsultationRooms: Array<BookingConsultationRoom>;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingVirtualConsultationRooms: Array<BookingConsultationRoom>;
  /** @deprecated Booking form has to be reworked from the ground. */
  bookingConsultationAvailableSlotsByConsultant: Array<BookingConsultationAvailableDate>;
  catalogueProducts: Array<CatalogueProduct>;
  catalogueEngagementRings: Array<CatalogueEngagementRing>;
  catalogueEngagementRing?: Maybe<CatalogueEngagementRing>;
  catalogueEngagementRingsAggregate: CatalogueAggregate;
  catalogueEngagementRingFilters: CatalogueEngagementRingFilters;
  catalogueEngagementRingFiltersVariations: Array<CatalogueEngagementRingFiltersVariation>;
  catalogueEngagementRingContainsProducts: Array<Scalars['Boolean']['output']>;
  catalogueWeddingRings: Array<CatalogueWeddingRing>;
  catalogueWeddingRingsAggregate: CatalogueAggregate;
  catalogueWeddingRingFilters: CatalogueWeddingRingFilters;
  catalogueWeddingRingFilterVariations: Array<CatalogueWeddingRingFiltersVariation>;
  catalogueReadyToGoRings: Array<CatalogueReadyToGoRing>;
  catalogueReadyToGoRing?: Maybe<CatalogueReadyToGoRing>;
  catalogueReadyToGoRingsAggregate: CatalogueAggregate;
  catalogueReadyToGoRingsFilters: CatalogueReadyToGoRingFilters;
  catalogueJewelleries: Array<CatalogueJewellery>;
  catalogueJewellery?: Maybe<CatalogueJewellery>;
  catalogueJewelleriesFilters: CatalogueJewelleriesFilters;
  catalogueJewelleriesFiltersVariations: Array<CatalogueJewelleriesFiltersVariation>;
  catalogueJewelleriesAggregate: CatalogueAggregate;
  catalogueJewelleryNecklaces: Array<CatalogueJewelleryNecklace>;
  catalogueJewelleryNecklace?: Maybe<CatalogueJewelleryNecklace>;
  catalogueJewelleryNecklacesFilters: CatalogueJewelleryNecklacesFilters;
  catalogueJewelleryNecklacesFiltersVariations: Array<CatalogueJewelleriesNecklacesFiltersVariation>;
  catalogueJewelleryNecklacesAggregate: CatalogueAggregate;
  catalogueJewelleryEarrings: Array<CatalogueJewelleryEarrings>;
  catalogueJewelleryEarring?: Maybe<CatalogueJewelleryEarrings>;
  catalogueJewelleryEarringsFilters: CatalogueJewelleryEarringsFilters;
  catalogueJewelleryEarringsFiltersVariations: Array<CatalogueJewelleriesEarringsFiltersVariation>;
  catalogueJewelleryEarringsAggregate: CatalogueAggregate;
  catalogueJewelleryBracelets: Array<CatalogueJewelleryBracelet>;
  catalogueJewelleryBracelet?: Maybe<CatalogueJewelleryBracelet>;
  catalogueJewelleryBraceletsFilters: CatalogueJewelleryBraceletsFilters;
  catalogueJewelleryBraceletFiltersVariations: Array<CatalogueJewelleriesBraceletsFiltersVariation>;
  catalogueJewelleryBraceletsAggregate: CatalogueAggregate;
  defaultRegion: Region;
  defaultAlternateRegion: Region;
  regions: Array<Region>;
  region: Region;
  regionSuggest: Region;
  deliveryDaysForBespokeEngagementRings: Scalars['Int']['output'];
  metals: Array<Metal>;
  convertMoney: Array<Money>;
  stoneClarityBySystemCode: StoneClarity;
  stoneClaritiesBySystemCode: Array<StoneClarity>;
  stoneColorBySystemCode: StoneColor;
  stoneColorsBySystemCode: Array<StoneColor>;
  stoneCategoryBySystemCode: StoneCategory;
  stoneCategoriesBySystemCode: Array<StoneCategory>;
  stoneShapeBySystemCodes: Array<StoneShape>;
  stoneCutsBySystemCodes: Array<StoneCut>;
  stoneGradesBySystemCodes: Array<StoneGrade>;
  stoneFluorescencesBySystemCodes: Array<StoneFluorescence>;
  stonePolishesBySystemCodes: Array<StonePolish>;
  stoneSymmetriesBySystemCodes: Array<StoneSymmetry>;
  stoneColors: Array<StoneColor>;
  stoneClarities: Array<StoneClarity>;
  stoneShapes: Array<StoneShape>;
  stoneGrades: Array<StoneGrade>;
  stoneCrystals: Array<StoneCrystal>;
  languages: Array<Language>;
  language?: Maybe<Language>;
  customerExists: Scalars['Boolean']['output'];
  validateCustomerRegistrationInput: Scalars['Boolean']['output'];
  me?: Maybe<User>;
  convertPriceBoundsForGems: GemsApiPriceBounds;
  convertPriceBoundsForGemsMulti: Array<GemsApiPriceBounds>;
  calculateGemsApiStoneTotalSalePrices: Array<Money>;
  nonSkuLabGrownDiamonds: Array<NonSkuLabGrown>;
  nonSkuLabGrownDiamondsBounds: NonSkuLabGrownDiamondsBounds;
  nonSkuLabGrownDiamond?: Maybe<NonSkuLabGrown>;
  nonSkuGemStones: Array<NonSkuGemstone>;
  nonSkuGemStonesBounds: NonSkuGemstonesBounds;
  nonSkuGemStone?: Maybe<NonSkuGemstone>;
  nonSkuLabGrownPricingCells: Array<NonSkuLabGrown>;
  nonSkuGemStonesPricingCells: Array<NonSkuGemstone>;
  nonSkuLabGrownShapeDimensions: Array<NonSkuLabGrownShapeDimension>;
  nonSkuLabGrownCaratDimensions: Array<NonSkuLabGrownCaratDimension>;
  nonSkuLabGrownGradeDimensions: Array<NonSkuLabGrownGradeDimension>;
  nonSkuGemstoneShapeDimensions: Array<NonSkuGemstoneShapeDimension>;
  nonSkuGemstoneGradeClarityDimensions: Array<NonSkuGemstoneGradeClarityDimension>;
  nonSkuGemstoneColorCrystalDimensions: Array<NonSkuGemstoneType>;
  nonSkuGemstoneCaratDimensions: Array<NonSkuGemstoneCaratDimension>;
  nonSkuGemstoneImages: Array<NonSkuGemstoneImage>;
  ringBuilder: RingBuilder;
  searchEverywhere: SearchEverywhereResponse;
};


export type QuerybookingConsultationAvailableSlotsArgs = {
  input: BookingConsultationSlotInput;
};


export type QueryvalidateConsultationInputArgs = {
  input: BookingCreateConsultationInput;
};


export type QuerybookingConsultationArgs = {
  id: Scalars['ID']['input'];
};


export type QuerybookingCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QuerybookingAvailableTransitionsArgs = {
  id: Scalars['ID']['input'];
};


export type QuerybookingInPersonConsultationRoomsArgs = {
  showroomId: Scalars['ID']['input'];
  kind: BookingConsultationRoomKind;
  consultationPurposeId: Scalars['ID']['input'];
};


export type QuerybookingVirtualConsultationRoomsArgs = {
  showroomId: Scalars['ID']['input'];
  kind: BookingConsultationRoomKind;
  consultationPurposeId: Scalars['ID']['input'];
};


export type QuerybookingConsultationAvailableSlotsByConsultantArgs = {
  consultationPurpose: Scalars['ID']['input'];
  consultationMethod: Scalars['ID']['input'];
  consultant?: InputMaybe<Scalars['ID']['input']>;
  showroom: Scalars['ID']['input'];
  ignoreConsultation?: InputMaybe<Scalars['ID']['input']>;
  consultationRoom?: InputMaybe<Scalars['ID']['input']>;
  consultationRoomKind: BookingConsultationRoomKind;
  order?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerycatalogueProductsArgs = {
  filter?: InputMaybe<CatalogueFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueEngagementRingsArgs = {
  filter?: InputMaybe<CatalogueEngagementRingsFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueEngagementRingArgs = {
  filter: CatalogueEngagementRingFilterInput;
};


export type QuerycatalogueEngagementRingsAggregateArgs = {
  filter?: InputMaybe<CatalogueEngagementRingsFilterInput>;
};


export type QuerycatalogueEngagementRingFiltersArgs = {
  input: CatalogueEngagementRingsFilterInput;
};


export type QuerycatalogueEngagementRingContainsProductsArgs = {
  input: Array<CatalogueEngagementRingContainsProductsInput>;
};


export type QuerycatalogueWeddingRingsArgs = {
  filter?: InputMaybe<CatalogueWeddingRingFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueWeddingRingsAggregateArgs = {
  filter?: InputMaybe<CatalogueWeddingRingFilterInput>;
};


export type QuerycatalogueWeddingRingFiltersArgs = {
  input: CatalogueWeddingRingFilterInput;
};


export type QuerycatalogueReadyToGoRingsArgs = {
  filter?: InputMaybe<CatalogueReadyToGoRingsFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueReadyToGoRingArgs = {
  filter: CatalogueReadyToGoRingFilterInput;
};


export type QuerycatalogueReadyToGoRingsAggregateArgs = {
  filter?: InputMaybe<CatalogueReadyToGoRingsFilterInput>;
};


export type QuerycatalogueReadyToGoRingsFiltersArgs = {
  input: CatalogueReadyToGoRingsFilterInput;
};


export type QuerycatalogueJewelleriesArgs = {
  filter?: InputMaybe<CatalogueJewelleriesFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueJewelleryArgs = {
  filter: CatalogueJewelleryFilterInput;
};


export type QuerycatalogueJewelleriesFiltersArgs = {
  input?: InputMaybe<CatalogueJewelleriesFilterInput>;
};


export type QuerycatalogueJewelleriesAggregateArgs = {
  filter?: InputMaybe<CatalogueJewelleriesFilterInput>;
};


export type QuerycatalogueJewelleryNecklacesArgs = {
  filter?: InputMaybe<CatalogueJewelleriesNecklacesFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueJewelleryNecklaceArgs = {
  filter: CatalogueJewelleryFilterInput;
};


export type QuerycatalogueJewelleryNecklacesFiltersArgs = {
  input?: InputMaybe<CatalogueJewelleriesNecklacesFilterInput>;
};


export type QuerycatalogueJewelleryNecklacesAggregateArgs = {
  filter?: InputMaybe<CatalogueJewelleriesNecklacesFilterInput>;
};


export type QuerycatalogueJewelleryEarringsArgs = {
  filter?: InputMaybe<CatalogueJewelleriesEarringsFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueJewelleryEarringArgs = {
  filter: CatalogueJewelleryFilterInput;
};


export type QuerycatalogueJewelleryEarringsFiltersArgs = {
  input?: InputMaybe<CatalogueJewelleriesEarringsFilterInput>;
};


export type QuerycatalogueJewelleryEarringsAggregateArgs = {
  filter?: InputMaybe<CatalogueJewelleriesEarringsFilterInput>;
};


export type QuerycatalogueJewelleryBraceletsArgs = {
  filter?: InputMaybe<CatalogueJewelleriesBraceletsFilterInput>;
  sort?: InputMaybe<CatalogueSortInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerycatalogueJewelleryBraceletArgs = {
  filter: CatalogueJewelleryFilterInput;
};


export type QuerycatalogueJewelleryBraceletsFiltersArgs = {
  input?: InputMaybe<CatalogueJewelleriesBraceletsFilterInput>;
};


export type QuerycatalogueJewelleryBraceletsAggregateArgs = {
  filter?: InputMaybe<CatalogueJewelleriesBraceletsFilterInput>;
};


export type QueryregionArgs = {
  code: RegionCode;
};


export type QueryconvertMoneyArgs = {
  input: Array<ConvertMoneyInput>;
};


export type QuerystoneClarityBySystemCodeArgs = {
  systemCode: StoneClarityCode;
};


export type QuerystoneClaritiesBySystemCodeArgs = {
  systemCodes: Array<StoneClarityCode>;
};


export type QuerystoneColorBySystemCodeArgs = {
  systemCode: StoneColorCode;
};


export type QuerystoneColorsBySystemCodeArgs = {
  systemCodes: Array<StoneColorCode>;
};


export type QuerystoneCategoryBySystemCodeArgs = {
  systemCode: StoneCategoryCode;
};


export type QuerystoneCategoriesBySystemCodeArgs = {
  systemCodes: Array<StoneCategoryCode>;
};


export type QuerystoneShapeBySystemCodesArgs = {
  systemCodes: Array<StoneShapeCode>;
};


export type QuerystoneCutsBySystemCodesArgs = {
  systemCodes: Array<StoneCutCode>;
};


export type QuerystoneGradesBySystemCodesArgs = {
  systemCodes: Array<StoneGradeCode>;
};


export type QuerystoneFluorescencesBySystemCodesArgs = {
  systemCodes: Array<StoneFluorescenceCode>;
};


export type QuerystonePolishesBySystemCodesArgs = {
  systemCodes: Array<StonePolishCode>;
};


export type QuerystoneSymmetriesBySystemCodesArgs = {
  systemCodes: Array<StoneSymmetryCode>;
};


export type QuerystoneColorsArgs = {
  filter?: InputMaybe<StoneColorsFilterInput>;
};


export type QuerystoneClaritiesArgs = {
  filter?: InputMaybe<StoneClarityFilterInput>;
};


export type QuerystoneShapesArgs = {
  filter?: InputMaybe<StoneShapeFilterInput>;
};


export type QuerystoneGradesArgs = {
  filter?: InputMaybe<StoneGradesFilterInput>;
};


export type QuerystoneCrystalsArgs = {
  filter?: InputMaybe<StoneCrystalsFilterInput>;
};


export type QuerylanguageArgs = {
  locale: Scalars['Locale']['input'];
};


export type QuerycustomerExistsArgs = {
  email: Scalars['Email']['input'];
};


export type QueryvalidateCustomerRegistrationInputArgs = {
  input: CustomerRegistrationInput;
};


export type QueryconvertPriceBoundsForGemsArgs = {
  input: ConvertPriceBoundsForGems;
};


export type QueryconvertPriceBoundsForGemsMultiArgs = {
  input: Array<ConvertPriceBoundsForGems>;
};


export type QuerycalculateGemsApiStoneTotalSalePricesArgs = {
  input: Array<CalculateGemsApiStoneTotalSalePriceInput>;
};


export type QuerynonSkuLabGrownDiamondsArgs = {
  region: RegionCode;
  currency: CurrencyInput;
  filters?: InputMaybe<NonSkuLabGrownDiamondsFilters>;
  sort?: InputMaybe<NonSkuLabGrownDiamondSortInput>;
};


export type QuerynonSkuLabGrownDiamondArgs = {
  filter: NonSkuLabGrownDiamondFilterInput;
};


export type QuerynonSkuGemStonesArgs = {
  region: RegionCode;
  currency: CurrencyInput;
  filters?: InputMaybe<NonSkuGemstoneFilters>;
  sort?: InputMaybe<NonSkuGemstoneSortInput>;
};


export type QuerynonSkuGemStoneArgs = {
  filter: NonSkuGemstoneFilterInput;
};


export type QuerynonSkuLabGrownPricingCellsArgs = {
  filters?: InputMaybe<NonSkuLabGrownPricingCellFilters>;
};


export type QuerynonSkuGemStonesPricingCellsArgs = {
  filters?: InputMaybe<NonSkuGemStonesPricingCellFilters>;
};


export type QueryringBuilderArgs = {
  input?: InputMaybe<RingBuilderGetInput>;
};


export type QuerysearchEverywhereArgs = {
  query: Scalars['String']['input'];
  justMe: Scalars['Boolean']['input'];
};

export type Mutation = {
  ping: Scalars['String']['output'];
  /** For not-logged user */
  createConsultationNewCustomer: BookingCreateConsultationNewCustomerResponse;
  /** For logged user */
  createConsultationExistingCustomer: BookingCreateConsultationExistingCustomerResponse;
  cancelConsultation: Scalars['Boolean']['output'];
  /** @deprecated Booking form has to be reworked from the ground. */
  createConsultationByConsultant?: Maybe<BookingConsultation>;
  /** @deprecated Booking form has to be reworked from the ground. */
  updateConsultationByConsultant?: Maybe<BookingConsultation>;
  /** @deprecated Booking form has to be reworked from the ground. */
  applyTransitionToConsultationByConsultant?: Maybe<BookingConsultation>;
  removeFromMyCart: Order;
  setOrderCollectFromShowroomInformation: SetDeliveryInformationResponse;
  setOrderDeliverToAddressInformation: SetDeliveryInformationResponse;
  payViaNoPayment: Order;
  createAffirmTransaction: AffirmTransaction;
  payViaAffirm: AffirmPaymentResponse;
  completeAffirmTransactionPostIframe: AffirmCompleteTransactionResponse;
  createAllocationTransaction: AllocationTransaction;
  payViaAllocation: Order;
  createBankTransaction: BankTransaction;
  payViaBank: Order;
  createCheckoutcomTransaction: CreateCheckoutcomTransactionResponse;
  payViaCheckoutcom: PayViaCheckoutcomResponse;
  completeCheckoutcomTransactionPost3ds: CompleteCheckoutcomTransactionPost3dsResponse;
  createKlarnaTransaction: KlarnaTransaction;
  payViaKlarna: KlarnaPaymentResponse;
  applyPromoCode?: Maybe<PromoCodeApplicationResult>;
  questionnaireCompleteExistingCustomer: QuestionnaireCompletedExistingCustomerResponse;
  questionnaireCompleteNewCustomer: QuestionnaireCompletedNewCustomerResponse;
  magicLinkRequest?: Maybe<Scalars['Void']['output']>;
  magicLinkConsume: MagicLinkConsumeResponse;
  createDesignInspiration: DesignInspiration;
  loginWithGoogle: LoginResponse;
  login: LoginResponse;
  autologin: LoginResponse;
  logout: Scalars['Boolean']['output'];
  refreshToken: LoginResponse;
  impersonate: LoginResponse;
  createEnquiryExistingCustomer: EnquiryResponseExistingCustomer;
  createEnquiryNewCustomer: EnquiryResponseNewCustomer;
  createEnquiryContactUsExistingCustomer: EnquiryResponseExistingCustomer;
  createEnquiryContactUsNewCustomer: EnquiryResponseNewCustomer;
  createEnquiryCustomEngagementRingExistingCustomer: EnquiryResponseExistingCustomer;
  createEnquiryCustomEngagementRingNewCustomer: EnquiryResponseNewCustomer;
  createEnquiryEngagementRingPreferAnotherShapeExistingCustomer: EnquiryResponseExistingCustomer;
  createEnquiryEngagementRingPreferAnotherShapeNewCustomer: EnquiryResponseNewCustomer;
  createEnquiryDiamondSearchProductExistingCustomer: EnquiryResponseExistingCustomer;
  createEnquiryDiamondSearchProductNewCustomer: EnquiryResponseNewCustomer;
  nonSkuLabGrownGradeDimensionDelete: NonSkuLabGrownGradeDimension;
  nonSkuLabGrownGradeDimensionCreate: NonSkuLabGrownGradeDimension;
  nonSkuLabGrownShapeDimensionDelete: NonSkuLabGrownShapeDimension;
  nonSkuLabGrownShapeDimensionCreate: NonSkuLabGrownShapeDimension;
  nonSkuLabGrownShapeDimensionUpdate: NonSkuLabGrownShapeDimension;
  nonSkuLabGrownCaratDimensionDelete: NonSkuLabGrownCaratDimension;
  nonSkuLabGrownCaratDimensionCreate: NonSkuLabGrownCaratDimension;
  /** @deprecated use nonSkuLabGrownDiamondCreateOrUpdate */
  nonSkuLabGrownDiamondCreate: NonSkuLabGrown;
  nonSkuLabGrownDiamondDelete: NonSkuLabGrown;
  nonSkuLabGrownDiamondDeleteImage: NonSkuLabGrown;
  nonSkuLabGrownDiamondChangeImage: NonSkuLabGrown;
  nonSkuGemstoneShapeDimensionDelete: NonSkuGemstoneShapeDimension;
  nonSkuGemstoneShapeDimensionCreate: NonSkuGemstoneShapeDimension;
  nonSkuGemstoneGradeClarityDimensionDelete: NonSkuGemstoneGradeClarityDimension;
  nonSkuGemstoneGradeClarityDimensionCreate: NonSkuGemstoneGradeClarityDimension;
  nonSkuGemstoneColorCrystalDimensionDelete: NonSkuGemstoneType;
  nonSkuGemstoneColorCrystalDimensionCreate: NonSkuGemstoneType;
  nonSkuGemstoneCaratDimensionDelete: NonSkuGemstoneCaratDimension;
  nonSkuGemstoneCaratDimensionCreate: NonSkuGemstoneCaratDimension;
  /** @deprecated use nonSkuGemStoneCreateOrUpdate */
  nonSkuGemStoneCreate: NonSkuGemstone;
  nonSkuGemStoneDelete: NonSkuGemstone;
  nonSkuGemStoneChangeImage: NonSkuGemstone;
  nonSkuGemStoneDeleteImage: NonSkuGemstone;
  nonSkuGemstoneImageCreate: NonSkuGemstoneImage;
  nonSkuGemstoneImageUpdate: NonSkuGemstoneImage;
  nonSkuGemstoneImageDelete: NonSkuGemstoneImage;
  designStudioProductEngagementRingUpdate: DesignStudioProductEngagementRing;
  designStudioProductWeddingRingUpdate: DesignStudioProductWeddingRing;
  designStudioQuotationEngagementRingUpdate: QuotationEngagementRing;
  addDesignStudioProductToMyCart: Order;
  createDesignStudioProductAndAddToCartWeddingRingNewCustomer: CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse;
  createDesignStudioProductAndAddToCartWeddingRingExistingCustomer: CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse;
  createDesignStudioProductAndAddToCartJewelleryNewCustomer: CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse;
  createDesignStudioProductAndAddToCartJewelleryExistingCustomer: CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse;
  addToCartReadyToGoRingNewCustomer: AddToCartReadyToGoRingNewCustomerResponse;
  addToCartReadyToGoRingExistingCustomer: AddToCartReadyToGoRingExistingCustomerResponse;
  ringBuilder: RingBuilder;
  ringBuilderResolveNewCustomer: RingBuilderResolvedNewCustomer;
  ringBuilderResolveExistingCustomer: RingBuilderResolvedExistingCustomer;
  marketingData: MarketingDataResponse;
};


export type MutationcreateConsultationNewCustomerArgs = {
  input: BookingCreateConsultationInput;
  customer: CustomerRegistrationInput;
};


export type MutationcreateConsultationExistingCustomerArgs = {
  input: BookingCreateConsultationInput;
};


export type MutationcancelConsultationArgs = {
  input: BookingCancelConsultationInput;
};


export type MutationcreateConsultationByConsultantArgs = {
  customer: Scalars['ID']['input'];
  opportunity?: InputMaybe<Scalars['String']['input']>;
  consultationPurpose: Scalars['ID']['input'];
  consultationMethod: Scalars['ID']['input'];
  autoAssignConsultant: Scalars['Boolean']['input'];
  reassignOpportunity: Scalars['Boolean']['input'];
  order?: InputMaybe<Scalars['ID']['input']>;
  input: BookingConsultationMutableFields;
};


export type MutationupdateConsultationByConsultantArgs = {
  id: Scalars['ID']['input'];
  reassignOpportunity: Scalars['Boolean']['input'];
  consultationRoom?: InputMaybe<Scalars['ID']['input']>;
  input: BookingConsultationMutableFields;
};


export type MutationapplyTransitionToConsultationByConsultantArgs = {
  id: Scalars['ID']['input'];
  transition: Scalars['String']['input'];
};


export type MutationremoveFromMyCartArgs = {
  productId: Scalars['ID']['input'];
};


export type MutationsetOrderCollectFromShowroomInformationArgs = {
  input: CollectFromShowroomInput;
};


export type MutationsetOrderDeliverToAddressInformationArgs = {
  input: DeliverToAddressInput;
};


export type MutationpayViaNoPaymentArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationcreateAffirmTransactionArgs = {
  input: AffirmTransactionInput;
};


export type MutationpayViaAffirmArgs = {
  input: AffirmPaymentInput;
};


export type MutationcompleteAffirmTransactionPostIframeArgs = {
  input: AffirmCompleteTransactionInput;
};


export type MutationcreateAllocationTransactionArgs = {
  input: AllocationTransactionInput;
};


export type MutationpayViaAllocationArgs = {
  allocationTransactionId: Scalars['ID']['input'];
};


export type MutationcreateBankTransactionArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationpayViaBankArgs = {
  bankTransactionId: Scalars['ID']['input'];
};


export type MutationcreateCheckoutcomTransactionArgs = {
  input: CreateCheckoutcomTransactionInput;
};


export type MutationpayViaCheckoutcomArgs = {
  input: PayViaCheckoutcomInput;
};


export type MutationcompleteCheckoutcomTransactionPost3dsArgs = {
  input: CompleteCheckoutcomTransactionInput;
};


export type MutationcreateKlarnaTransactionArgs = {
  input: KlarnaTransactionInput;
};


export type MutationpayViaKlarnaArgs = {
  input: KlarnaPaymentInput;
};


export type MutationapplyPromoCodeArgs = {
  promoCode: Scalars['String']['input'];
};


export type MutationquestionnaireCompleteExistingCustomerArgs = {
  input: QuestionnaireCompleteInput;
};


export type MutationquestionnaireCompleteNewCustomerArgs = {
  input: QuestionnaireCompleteInput;
  customer: CustomerRegistrationInput;
};


export type MutationmagicLinkRequestArgs = {
  input: MagicLinkRequest;
};


export type MutationmagicLinkConsumeArgs = {
  input: MagicLinkConsume;
};


export type MutationcreateDesignInspirationArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationloginWithGoogleArgs = {
  credentials: CustomerRegistrationByGoogleInput;
};


export type MutationloginArgs = {
  credentials: CredentialsInput;
};


export type MutationautologinArgs = {
  authToken: Scalars['String']['input'];
};


export type MutationrefreshTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationimpersonateArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationcreateEnquiryExistingCustomerArgs = {
  input: EnquiryInput;
};


export type MutationcreateEnquiryNewCustomerArgs = {
  input: EnquiryInput;
  customer: CustomerRegistrationInput;
};


export type MutationcreateEnquiryContactUsExistingCustomerArgs = {
  input: EnquiryContactUsInput;
};


export type MutationcreateEnquiryContactUsNewCustomerArgs = {
  input: EnquiryContactUsInput;
  customer: CustomerRegistrationInput;
};


export type MutationcreateEnquiryCustomEngagementRingExistingCustomerArgs = {
  input: EnquiryCustomEngagementRing;
};


export type MutationcreateEnquiryCustomEngagementRingNewCustomerArgs = {
  input: EnquiryCustomEngagementRing;
  customer: CustomerRegistrationInput;
};


export type MutationcreateEnquiryEngagementRingPreferAnotherShapeExistingCustomerArgs = {
  input: EnquiryEngagementRingCollectionInput;
};


export type MutationcreateEnquiryEngagementRingPreferAnotherShapeNewCustomerArgs = {
  input: EnquiryEngagementRingCollectionInput;
  customer: CustomerRegistrationInput;
};


export type MutationcreateEnquiryDiamondSearchProductExistingCustomerArgs = {
  input: EnquiryDiamondSearchProduct;
};


export type MutationcreateEnquiryDiamondSearchProductNewCustomerArgs = {
  input: EnquiryDiamondSearchProduct;
  customer: CustomerRegistrationInput;
};


export type MutationnonSkuLabGrownGradeDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuLabGrownGradeDimensionCreateArgs = {
  input: NonSkuLabGrownGradeDimensionCreateInput;
};


export type MutationnonSkuLabGrownShapeDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuLabGrownShapeDimensionCreateArgs = {
  input: NonSkuLabGrownShapeDimensionCreateInput;
};


export type MutationnonSkuLabGrownShapeDimensionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: NonSkuLabGrownShapeDimensionUpdateInput;
};


export type MutationnonSkuLabGrownCaratDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuLabGrownCaratDimensionCreateArgs = {
  input: NonSkuLabGrownCaratDimensionCreateInput;
};


export type MutationnonSkuLabGrownDiamondCreateArgs = {
  input: NonSkuLabGrownDiamondCreateInput;
};


export type MutationnonSkuLabGrownDiamondDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuLabGrownDiamondDeleteImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuLabGrownDiamondChangeImageArgs = {
  id: Scalars['ID']['input'];
  image: Scalars['Upload']['input'];
};


export type MutationnonSkuGemstoneShapeDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuGemstoneShapeDimensionCreateArgs = {
  input: NonSkuGemstoneShapeDimensionCreateInput;
};


export type MutationnonSkuGemstoneGradeClarityDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuGemstoneGradeClarityDimensionCreateArgs = {
  input: NonSkuGemstoneGradeClarityDimensionCreateInput;
};


export type MutationnonSkuGemstoneColorCrystalDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuGemstoneColorCrystalDimensionCreateArgs = {
  input: NonSkuGemstoneColorCrystalDimensionCreateInput;
};


export type MutationnonSkuGemstoneCaratDimensionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuGemstoneCaratDimensionCreateArgs = {
  input: NonSkuGemstoneCaratDimensionCreateInput;
};


export type MutationnonSkuGemStoneCreateArgs = {
  input: NonSkuGemStoneCreateInput;
};


export type MutationnonSkuGemStoneDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuGemStoneChangeImageArgs = {
  id: Scalars['ID']['input'];
  image: Scalars['Upload']['input'];
};


export type MutationnonSkuGemStoneDeleteImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationnonSkuGemstoneImageCreateArgs = {
  input: NonSkuGemstoneImageCreateInput;
};


export type MutationnonSkuGemstoneImageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: NonSkuGemstoneImageUpdateInput;
};


export type MutationnonSkuGemstoneImageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdesignStudioProductEngagementRingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: DesignStudioProductEngagementRingUpdate;
};


export type MutationdesignStudioProductWeddingRingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: DesignStudioProductWeddingRingUpdate;
};


export type MutationdesignStudioQuotationEngagementRingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: DesignStudioQuotationEngagementRingUpdate;
};


export type MutationaddDesignStudioProductToMyCartArgs = {
  productId: Scalars['ID']['input'];
};


export type MutationcreateDesignStudioProductAndAddToCartWeddingRingNewCustomerArgs = {
  input: DesignStudioWeddingRingInput;
  customer: CustomerRegistrationInput;
};


export type MutationcreateDesignStudioProductAndAddToCartWeddingRingExistingCustomerArgs = {
  input: DesignStudioWeddingRingInput;
};


export type MutationcreateDesignStudioProductAndAddToCartJewelleryNewCustomerArgs = {
  input: DesignStudioJewelleryInput;
  customer: CustomerRegistrationInput;
};


export type MutationcreateDesignStudioProductAndAddToCartJewelleryExistingCustomerArgs = {
  input: DesignStudioJewelleryInput;
};


export type MutationaddToCartReadyToGoRingNewCustomerArgs = {
  input: AddToCartReadyToGoRingInput;
  customer: CustomerRegistrationInput;
};


export type MutationaddToCartReadyToGoRingExistingCustomerArgs = {
  input: AddToCartReadyToGoRingInput;
};


export type MutationringBuilderArgs = {
  input: RingBuilderInput;
};


export type MutationringBuilderResolveNewCustomerArgs = {
  input: RingBuilderResolveInput;
  customer: CustomerRegistrationInput;
};


export type MutationringBuilderResolveExistingCustomerArgs = {
  input: RingBuilderResolveInput;
};


export type MutationmarketingDataArgs = {
  input: MarketingDataInput;
};

export type PhoneNumberFormat =
  | 'E164'
  | 'INTERNATIONAL'
  | 'NATIONAL'
  | 'RFC3966';

export type PhoneNumberInput = {
  countryCode: Scalars['String']['input'];
  nationalNumber: Scalars['String']['input'];
};

export type PhoneNumberType = {
  e164: Scalars['PhoneNumber']['output'];
  countryCode?: Maybe<Scalars['String']['output']>;
  nationalNumber?: Maybe<Scalars['String']['output']>;
  formatted: Scalars['String']['output'];
};


export type PhoneNumberTypeformattedArgs = {
  format: PhoneNumberFormat;
};

export type Asset = {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  sources: Array<ImageSrc>;
  size: ImageSize;
};


export type AssetsizeArgs = {
  name: ImageSizeName;
};

export type ImageSizeName =
  | 'COVER'
  | 'LARGE'
  | 'MEDIUM'
  | 'SMALL'
  | 'COVER_X2'
  | 'LARGE_X2'
  | 'MEDIUM_X2'
  | 'SMALL_X2';

export type GenericImage = {
  url: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  sources: Array<ImageSrc>;
  size: ImageSize;
};


export type GenericImagesizeArgs = {
  name: ImageSizeName;
};

export type ImageSize = {
  name: ImageSizeName;
  url: Scalars['String']['output'];
  sources: Array<ImageSrc>;
};

export type ImageSrc = {
  url: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type GeoPoint = {
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type RegionCode =
  | 'INT'
  | 'US'
  | 'UK'
  | 'EU'
  | 'IE'
  | 'NZ'
  | 'AU'
  | 'CA'
  | 'ZA';

export type Region = {
  code: RegionCode;
  language: Language;
  locales: Array<Scalars['Locale']['output']>;
  currency: Scalars['Currency']['output'];
  representingCountry: Scalars['Country']['output'];
  isActive: Scalars['Boolean']['output'];
  vat: Scalars['Decimal']['output'];
};

export type DeliveryDate = {
  date: Scalars['DateTime']['output'];
  validUntil: Scalars['DateTime']['output'];
};

export type Order = {
  id: Scalars['ID']['output'];
  products: Array<OrderProduct>;
  promoCode?: Maybe<PromoCode>;
  status: OrderStatus;
  isCompleted: Scalars['Boolean']['output'];
  placementDate?: Maybe<Scalars['DateTime']['output']>;
  shippingAddress: OrderAddress;
  billingAddress: OrderAddress;
  availableShowroomsForCollection: Array<Showroom>;
  /** null desiredDeliveryDate means ASAR */
  desiredDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  isAsarEnabled: Scalars['Boolean']['output'];
  isShippingAddressReadonly: Scalars['Boolean']['output'];
  isDeliveryConfirmed: Scalars['Boolean']['output'];
  paymentPlan: PaymentPlan;
  subtotalAmount: Money;
  prediscountSubtotalAmount: Money;
  prediscountTotalAmount: Money;
  savedAmount: Money;
  vatAmount: Money;
  salesTaxAmount: Money;
  shippingAmount: Money;
  totalAmount: Money;
  paidAmount: Money;
  remainingAmount: Money;
  paymentMethods: PaymentMethodContainer;
  transactions: Array<TransactionInterface>;
  /**  null before order is dispatched and for collection orders */
  shipmentTrackingInformation?: Maybe<ShipmentTrackingInformation>;
  customer: Customer;
  firstAvailableDeliveryDate: DeliveryDate;
  /** mask */
  allowedWeekdays: Scalars['Int']['output'];
  disabledDates: Array<Scalars['DateTime']['output']>;
};

export type OrderStatus = {
  name: Scalars['String']['output'];
};


export type OrderStatusnameArgs = {
  locale: Scalars['Locale']['input'];
};

export type ShipmentTrackingInformation = {
  /** not to be confused with the order's dispatched at date */
  dispatchedAt: Scalars['DateTime']['output'];
  shippingCompany: Scalars['String']['output'];
  trackingNumber: Scalars['String']['output'];
  trackingUrl: Scalars['String']['output'];
};

export type DeliverToAddressInput = {
  orderId: Scalars['ID']['input'];
  shippingAddress: OrderShipToAddressInput;
  /** null billingAddress signifies that billing address is the same as shipping address */
  billingAddress?: InputMaybe<OrderBillingAddressInput>;
  /** null desiredDeliveryDate means ASAR */
  desiredDeliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollectFromShowroomInput = {
  orderId: Scalars['ID']['input'];
  showroomID: Scalars['ID']['input'];
  deliveryData: OrderCollectFromShowroomDeliveryInput;
  billingAddress: OrderBillingAddressInput;
};

export type OrderCollectFromShowroomDeliveryInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: PhoneNumberInput;
  email: Scalars['Email']['input'];
  deliveryInstructions: Scalars['String']['input'];
};

export type OrderShipToAddressInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['Email']['input'];
  phoneNumber: PhoneNumberInput;
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  subdivision?: InputMaybe<Scalars['CountrySubdivision']['input']>;
  deliveryInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBillingAddressInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<PhoneNumberInput>;
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  country: Scalars['Country']['input'];
  subdivision?: InputMaybe<Scalars['CountrySubdivision']['input']>;
};

export type TransactionInterface = {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
};

export type TransactionStatusCode =
  | 'CREATED'
  | 'INITIALISED'
  | 'PENDING'
  | 'COMPLETED'
  | 'DECLINED'
  | 'EXPIRED'
  | 'VOIDED';

export type TransactionStatus = {
  systemCode: TransactionStatusCode;
  name: Scalars['String']['output'];
};


export type TransactionStatusnameArgs = {
  locale: Scalars['Locale']['input'];
};

export type LegacyTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
  paymentMethodName: Scalars['String']['output'];
};


export type LegacyTransactionpaymentMethodNameArgs = {
  locale: Scalars['Locale']['input'];
};

export type PaymentMethodContainer = {
  noPayment?: Maybe<NoPaymentMethod>;
  affirmPayment?: Maybe<AffirmPaymentMethod>;
  allocationPayment?: Maybe<AllocationPaymentMethod>;
  bankPayment?: Maybe<BankPaymentMethod>;
  checkoutcomPayment?: Maybe<CheckoutcomPaymentMethod>;
  klarnaPayment?: Maybe<KlarnaPaymentMethod>;
};

export type NoPaymentMethod = {
  systemCode: Scalars['ID']['output'];
};

export type PaymentPlan = {
  paid: Array<PaymentPlanPaidRecord>;
  current?: Maybe<PaymentPlanUpcomingRecord>;
  upcoming: Array<PaymentPlanUpcomingRecord>;
};

export type PaymentPlanPaidRecord = {
  amount: Money;
  paidOn: Scalars['DateTime']['output'];
};

export type PaymentPlanUpcomingRecord = {
  amount: Money;
};

export type OrderProduct = {
  id: Scalars['ID']['output'];
  order: Order;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  prediscountTotalSaleAmount: Money;
  totalSaleAmount: Money;
  designStudioProduct?: Maybe<DesignStudioProduct>;
  customer: Customer;
};

export type OrderAddress = {
  id: Scalars['ID']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  phoneNumber?: Maybe<PhoneNumberType>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  country: Scalars['Country']['output'];
  subdivision?: Maybe<Scalars['CountrySubdivision']['output']>;
  deliveryInstructions?: Maybe<Scalars['String']['output']>;
};

export type SetDeliveryInformationResponse = SetDeliveryInformationSuccessResponse | SetDeliveryInformationFailureResponse;

export type SetDeliveryInformationFailureResponse = {
  errors: Array<SetDeliveryInformationError>;
};

export type SetDeliveryInformationError = OrderAlreadyCompletedError;

export type SetDeliveryInformationSuccessResponse = {
  order: Order;
};

export type OrderAlreadyCompletedError = {
  message: Scalars['String']['output'];
};

export type OrderEmptyError = {
  message: Scalars['String']['output'];
};

export type PaymentAmountInvalidError = {
  message: Scalars['String']['output'];
};

export type OrderAddressNotConfirmedError = {
  message: Scalars['String']['output'];
};

export type DesiredDeliveryDateInvalidError = {
  message: Scalars['String']['output'];
};

export type PaymentMethodNotAllowedError = {
  message: Scalars['String']['output'];
};

export type AvataxAddressInvalidError = {
  message: Scalars['String']['output'];
};

export type AffirmFinanceOption = {
  price: Money;
  months: Scalars['Int']['output'];
  perMonth: Money;
};

export type AffirmPaymentMethod = {
  systemCode: Scalars['ID']['output'];
  publicKey: Scalars['String']['output'];
  scriptUrl: Scalars['String']['output'];
};

export type AffirmTransactionInput = {
  orderId: Scalars['ID']['input'];
};

export type AffirmTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
  /** After decoding you need to set .items.item_url to the product url */
  checkoutObject: Scalars['JSON']['output'];
};

export type AffirmPaymentInput = {
  transactionId: Scalars['ID']['input'];
};

export type AffirmPaymentResponse = {
  errors: Array<Scalars['String']['output']>;
  order: Order;
};

export type AffirmCompleteTransactionInput = {
  transactionId: Scalars['ID']['input'];
  /** checkoutToken=null means declined */
  checkoutToken?: InputMaybe<Scalars['String']['input']>;
};

export type AffirmCompleteTransactionResponse = {
  errors: Array<Scalars['String']['output']>;
  order: Order;
};

export type AllocationPaymentMethod = {
  systemCode: Scalars['ID']['output'];
  maxAmount: Money;
};

export type AllocationTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
};

export type AllocationTransactionInput = {
  orderId: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
};

export type BankPaymentMethod = {
  systemCode: Scalars['ID']['output'];
};

export type BankTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
};

export type CheckoutcomPaymentMethod = {
  systemCode: Scalars['ID']['output'];
  debugMode: Scalars['Boolean']['output'];
  publicKey: Scalars['String']['output'];
};

export type CreateCheckoutcomTransactionInput = {
  orderId: Scalars['ID']['input'];
  cardToken: Scalars['String']['input'];
};

export type CheckoutcomTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
};

export type PayViaCheckoutcomInput = {
  checkoutcomTransactionId: Scalars['ID']['input'];
  returnUrl: Scalars['Uri']['input'];
};

export type CompleteCheckoutcomTransactionInput = {
  checkoutcomTransactionId: Scalars['ID']['input'];
  ckoId: Scalars['String']['input'];
};

export type CreateCheckoutcomTransactionResponse = CreateCheckoutcomTransactionSuccessResponse | CreateCheckoutcomTransactionFailureResponse;

export type CreateCheckoutcomTransactionFailureResponse = {
  errors: Array<CreateCheckoutcomTransactionError>;
};

export type CreateCheckoutcomTransactionError = OrderAlreadyCompletedError | PaymentAmountInvalidError | OrderAddressNotConfirmedError | DesiredDeliveryDateInvalidError | AvataxAddressInvalidError | OrderEmptyError | PaymentMethodNotAllowedError;

export type CreateCheckoutcomTransactionSuccessResponse = {
  transaction: CheckoutcomTransaction;
};

export type PayViaCheckoutcomResponse = PayViaCheckoutcomSuccessResponse | PayViaCheckoutcomFailureResponse;

export type PayViaCheckoutcomFailureResponse = {
  errors: Array<PayViaCheckoutcomError>;
};

export type PayViaCheckoutcomError = OrderAlreadyCompletedError | PaymentAmountInvalidError | DesiredDeliveryDateInvalidError | CheckoutcomOperationDeclinedError;

export type PayViaCheckoutcomSuccessResponse = {
  order: Order;
  redirectUrl: Scalars['String']['output'];
};

export type CompleteCheckoutcomTransactionPost3dsResponse = CompleteCheckoutcomTransactionPost3dsSuccessResponse | CompleteCheckoutcomTransactionPost3dsFailureResponse;

export type CompleteCheckoutcomTransactionPost3dsFailureResponse = {
  errors: Array<CompleteCheckoutcomTransactionPost3dsError>;
};

export type CompleteCheckoutcomTransactionPost3dsError = OrderAlreadyCompletedError | PaymentAmountInvalidError | DesiredDeliveryDateInvalidError | CheckoutcomOperationDeclinedError;

export type CompleteCheckoutcomTransactionPost3dsSuccessResponse = {
  order: Order;
};

export type CheckoutcomOperationDeclinedError = {
  message: Scalars['String']['output'];
};

export type KlarnaFinanceOption = {
  price: Money;
  months: Scalars['Int']['output'];
  perMonth: Money;
};

export type KlarnaPaymentMethod = {
  systemCode: Scalars['ID']['output'];
};

export type KlarnaTransactionInput = {
  orderId: Scalars['ID']['input'];
  /** deposit amount within 20% and 50% of order total */
  depositAmount: Scalars['Decimal']['input'];
};

export type KlarnaTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
  sessionData: Scalars['JSON']['output'];
};

export type KlarnaPaymentInput = {
  orderId: Scalars['ID']['input'];
  data: Scalars['String']['input'];
};

export type KlarnaPaymentResponse = {
  errors: Array<Scalars['String']['output']>;
  order: Order;
};

export type StripeTransaction = TransactionInterface & {
  id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  status: TransactionStatus;
};

export type MetalCode =
  | 'EIGHTEEN_KARAT_WHITE_GOLD'
  | 'EIGHTEEN_KARAT_ROSE_GOLD'
  | 'EIGHTEEN_KARAT_YELLOW_GOLD'
  | 'FOURTEEN_KARAT_WHITE_GOLD'
  | 'FOURTEEN_KARAT_ROSE_GOLD'
  | 'FOURTEEN_KARAT_YELLOW_GOLD'
  | 'NINE_KARAT_WHITE_GOLD'
  | 'NINE_KARAT_ROSE_GOLD'
  | 'NINE_KARAT_YELLOW_GOLD'
  | 'PLATINUM'
  | 'SILVER';

export type Metal = {
  systemCode: MetalCode;
  name: Scalars['String']['output'];
  element: MetalElement;
  color?: Maybe<MetalColor>;
  karat?: Maybe<Scalars['Int']['output']>;
  orderIndex: Scalars['Int']['output'];
  millesimalFineness: Scalars['Decimal']['output'];
};

export type MetalColorCode =
  | 'WHITE'
  | 'ROSE'
  | 'YELLOW';

export type MetalColor = {
  systemCode: MetalColorCode;
  translation: MetalColorTranslation;
};


export type MetalColortranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type MetalColorTranslation = {
  name: Scalars['String']['output'];
};

export type MetalElementCode =
  | 'PLATINUM'
  | 'SILVER'
  | 'GOLD';

export type MetalElement = {
  systemCode: MetalElementCode;
  translation: MetalElementTranslation;
};


export type MetalElementtranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type MetalElementTranslation = {
  name: Scalars['String']['output'];
};

export type Money = {
  amount: Scalars['Decimal']['output'];
  currency: Scalars['Currency']['output'];
};

export type CurrencyInput = {
  region: RegionCode;
  currency?: InputMaybe<Scalars['Currency']['input']>;
};

export type MoneyInput = {
  amount: Scalars['Decimal']['input'];
  currency: CurrencyInput;
};

export type ConvertMoneyInput = {
  money: MoneyInput;
  targetCurrency: Scalars['Currency']['input'];
};

export type ProductLabelTranslation = {
  name: Scalars['String']['output'];
};

export type EngagementRingStyleLabel = {
  systemCode: EngagementRingStyleLabelCode;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type EngagementRingStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type EngagementRingStyleLabelCode =
  | 'SOLITAIRE'
  | 'PAVE'
  | 'HALO'
  | 'TRILOGY'
  | 'GEMSTONE_SIDES'
  | 'TOI_MOI';

export type EngagementRingDesignStyleLabel = {
  systemCode: EngagementRingDesignStyleLabelCode;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type EngagementRingDesignStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type EngagementRingDesignStyleLabelCode =
  | 'VINTAGE'
  | 'CONTEMPORARY'
  | 'ART_DECO'
  | 'CLASSIC'
  | 'UNIQUE'
  | 'FLORAL';

export type EngagementRingDesignFeatureLabel = {
  systemCode: EngagementRingDesignFeatureLabelCode;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type EngagementRingDesignFeatureLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type EngagementRingDesignFeatureLabelCode =
  | 'EAGLE_CLAWS'
  | 'CATHEDRAL_SETTING'
  | 'MILGRAIN'
  | 'FISHTAIL'
  | 'SPLIT_SHANK'
  | 'MIXED_METAL'
  | 'CHANNEL_SETTING'
  | 'BEAD_SETTING'
  | 'BEZEL_SETTING'
  | 'DOUBLE_HALO'
  | 'COLOURED_GEMSTONES'
  | 'HAND_ENGRAVING';

export type WeddingRingCategoryLabelCode =
  | 'MENS'
  | 'LADIES';

export type WeddingRingCategoryLabel = {
  systemCode: WeddingRingCategoryLabelCode;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type WeddingRingCategoryLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type WeddingRingStyleLabel = {
  systemCode: WeddingRingStyleLabelCode;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type WeddingRingStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type WeddingRingStyleLabelCode =
  | 'PLAIN'
  | 'PAVE'
  | 'BEZEL_SET'
  | 'CHANNEL_SET'
  | 'DIAMOND'
  | 'CURVED'
  | 'SAPPHIRE'
  | 'BAGUETTE'
  | 'TWISTED'
  | 'CHEVRON';

export type JewelleryDesignStyleLabel = {
  systemCode: JewelleryDesignStyle;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type JewelleryDesignStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type JewelleryDesignStyle =
  | 'VINTAGE'
  | 'CONTEMPORARY'
  | 'ART_DECO'
  | 'CLASSIC'
  | 'UNIQUE'
  | 'FLORAL'
  | 'BIRTHSTONE';

export type JewelleryDesignFeatureLabel = {
  systemCode: JewelleryDesignFeature;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type JewelleryDesignFeatureLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type JewelleryGemstoneLabel = {
  systemCode: JewelleryGemstoneCode;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type JewelleryGemstoneLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type JewelleryGemstoneCode =
  | 'DIAMOND_APR'
  | 'SAPPHIRE_SEP'
  | 'RUBY_JUL'
  | 'PEARL'
  | 'GARNET_JAN'
  | 'EMERALD_MAY'
  | 'AMETHYST_FEB'
  | 'AQUAMARINE_MAR'
  | 'ALEXANDRITE_JUN'
  | 'PERIDOT_AUG'
  | 'TOPAZ_NOV'
  | 'TANZANITE_DEC'
  | 'TOURMALINE_OCT';

export type JewelleryDesignFeature =
  | 'PAVE'
  | 'BEZEL_SETTING'
  | 'FOUR_CLAW'
  | 'PETITE'
  | 'STATEMENT'
  | 'COLOURED_GEMSTONES';

export type JewelleryBraceletProductStyleLabel = {
  systemCode: JewelleryBraceletProductStyle;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type JewelleryBraceletProductStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type JewelleryBraceletProductStyle =
  | 'TENNIS'
  | 'DIAMOND'
  | 'BANGLE'
  | 'GEMSTONE';

export type JewelleryEarringsProductStyleLabel = {
  systemCode: JewelleryEarringsProductStyle;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type JewelleryEarringsProductStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type JewelleryEarringsProductStyle =
  | 'STUDS'
  | 'HOOPS'
  | 'DROP'
  | 'CLUSTER';

export type JewelleryNecklaceProductStyleLabel = {
  systemCode: JewelleryNecklaceProductStyle;
  translation: ProductLabelTranslation;
  icon?: Maybe<Asset>;
};


export type JewelleryNecklaceProductStyleLabeltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type JewelleryNecklaceProductStyle =
  | 'LONG'
  | 'SHORT'
  | 'SOLITAIRE';

export type PromoCode = {
  id: Scalars['ID']['output'];
  code: Scalars['String']['output'];
};

export type PromoCodeApplicationResult = {
  error?: Maybe<PromoCodeApplicationError>;
};

export type PromoCodeApplicationError =
  | 'ERROR_DOES_NOT_EXIST'
  | 'ERROR_DISABLED'
  | 'ERROR_EXPIRED'
  | 'ERROR_FIRST_SALE_ONLY'
  | 'ERROR_AFTER_FIRST_SALE_ONLY'
  | 'ERROR_SINGLE_USE_ONLY'
  | 'ERROR_CODE_ALREADY_USED';

export type QuestionnaireCompletedNewCustomerResponse = {
  questionnaire: QuestionnaireCompletedQuestionnaire;
  customer: CustomerRegistrationResponse;
};

export type QuestionnaireCompletedExistingCustomerResponse = {
  questionnaire: QuestionnaireCompletedQuestionnaire;
};

export type QuestionnaireCompleteInput = {
  referenceId: Scalars['ID']['input'];
  type: QuestionnaireType;
  steps: Array<QuestionnaireCompleteStepInput>;
  customerNotification?: InputMaybe<QuestionnaireCustomerNotificationInput>;
  submissionNotification?: InputMaybe<QuestionnaireSubmissionNotificationInput>;
};

export type QuestionnaireSubmissionNotificationInput = {
  recipients: Array<Scalars['Email']['input']>;
};

export type QuestionnaireCustomerNotificationInput = {
  subject: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type QuestionnaireCompleteStepInput = {
  title: Scalars['String']['input'];
  answers: Array<QuestionnaireAnswerInput>;
};

export type QuestionnaireAnswerInput = {
  question: QuestionnaireQuestionInput;
  answer: QuestionnaireAnswerValueInput;
};

export type QuestionnaireQuestionInput = {
  referenceId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionnaireAnswerValueInput = {
  text?: InputMaybe<QuestionnaireQuestionTextInput>;
  number?: InputMaybe<QuestionnaireQuestionFloatInput>;
  singleChoice?: InputMaybe<QuestionnaireQuestionChoiceInput>;
  multiChoice?: InputMaybe<Array<QuestionnaireQuestionChoiceInput>>;
};

export type QuestionnaireQuestionChoiceInput = {
  referenceId: Scalars['ID']['input'];
  layout: QuestionnaireQuestionChoiceLayoutInput;
  behaviour?: InputMaybe<QuestionnaireQuestionChoiceBehaviourInput>;
};

export type QuestionnaireQuestionChoiceBehaviourInput = {
  metalSystemCode?: InputMaybe<MetalCode>;
  ringStyleSystemCode?: InputMaybe<EngagementRingStyleLabelCode>;
  designStyleSystemCode?: InputMaybe<EngagementRingDesignStyleLabelCode>;
  designFeatureSystemCode?: InputMaybe<EngagementRingDesignFeatureLabelCode>;
  shape?: InputMaybe<StoneShapeCode>;
};

export type QuestionnaireQuestionTextInput = {
  text: Scalars['String']['input'];
};

export type QuestionnaireQuestionFloatInput = {
  number: Scalars['Float']['input'];
};

export type QuestionnaireQuestionChoiceLayoutInput = {
  image?: InputMaybe<QuestionnaireQuestionChoiceLayoutImageInput>;
  imageCard?: InputMaybe<QuestionnaireQuestionChoiceLayoutImageCardInput>;
  iconCard?: InputMaybe<QuestionnaireQuestionChoiceLayoutIconCardInput>;
  text?: InputMaybe<QuestionnaireQuestionChoiceLayoutTextInput>;
};

export type QuestionnaireQuestionChoiceLayoutImageInput = {
  image: Scalars['Uri']['input'];
};

export type QuestionnaireQuestionChoiceLayoutImageCardInput = {
  image: Scalars['Uri']['input'];
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionnaireBackgroundColor =
  | 'SLATE'
  | 'GREEN'
  | 'TAAFFEITE'
  | 'BLUE'
  | 'RED'
  | 'SAGE'
  | 'BLUSH'
  | 'STONE'
  | 'STONE2'
  | 'STONE3'
  | 'WHITE';

export type QuestionnaireQuestionChoiceLayoutIconCardInput = {
  image: Scalars['Uri']['input'];
  backgroundColor: QuestionnaireBackgroundColor;
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionnaireQuestionChoiceLayoutTextInput = {
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionnaireType =
  | 'GUIDED_JOURNEY'
  | 'DIAMOND_QUIZ'
  | 'INSPIRATION_QUIZ';

export type QuestionnaireQuestionSnapshot = {
  referenceId: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type QuestionnaireCompletedQuestionnaire = {
  id: Scalars['ID']['output'];
  referenceId: Scalars['ID']['output'];
  type: QuestionnaireType;
  steps: Array<QuestionnaireCompletedQuestionnaireStepSnapshot>;
};

export type QuestionnaireCompletedQuestionnaireStepSnapshot = {
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  answers: Array<QuestionnaireAnswer>;
};

export type QuestionnaireAnswer = {
  id: Scalars['ID']['output'];
  question: QuestionnaireQuestionSnapshot;
};

export type QuestionnaireQuestionAnswerText = QuestionnaireAnswer & {
  id: Scalars['ID']['output'];
  question: QuestionnaireQuestionSnapshot;
  text: Scalars['String']['output'];
};

export type QuestionnaireQuestionAnswerSingleChoice = QuestionnaireAnswer & {
  id: Scalars['ID']['output'];
  question: QuestionnaireQuestionSnapshot;
  choice: QuestionnaireQuestionChoiceOptionSnapshot;
};

export type QuestionnaireQuestionAnswerMultiChoice = QuestionnaireAnswer & {
  id: Scalars['ID']['output'];
  question: QuestionnaireQuestionSnapshot;
  choices: Array<QuestionnaireQuestionChoiceOptionSnapshot>;
};

export type QuestionnaireQuestionAnswerNumber = QuestionnaireAnswer & {
  id: Scalars['ID']['output'];
  question: QuestionnaireQuestionSnapshot;
  number: Scalars['Float']['output'];
};

export type QuestionnaireQuestionChoiceOptionSnapshot = {
  id: Scalars['ID']['output'];
  referenceId: Scalars['ID']['output'];
  layout: QuestionnaireQuestionChoiceOptionLayoutSnapshot;
};

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard = {
  backgroundColor: QuestionnaireBackgroundColor;
  icon?: Maybe<Asset>;
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
};

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotImage = {
  icon?: Maybe<Asset>;
};

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard = {
  icon?: Maybe<Asset>;
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
};

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotText = {
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
};

export type QuestionnaireQuestionChoiceOptionLayoutSnapshot = QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard | QuestionnaireQuestionChoiceOptionLayoutSnapshotImage | QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard | QuestionnaireQuestionChoiceOptionLayoutSnapshotText;

export type Showroom = {
  id: Scalars['ID']['output'];
  translation: ShowroomTranslation;
  location: ShowroomLocation;
  isAccessible: Scalars['Boolean']['output'];
  timezone: Scalars['String']['output'];
};


export type ShowroomtranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type ShowroomTranslation = {
  name: Scalars['String']['output'];
};

export type ShowroomLocation = {
  id: Scalars['ID']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  country: Scalars['Country']['output'];
  subdivision?: Maybe<Scalars['CountrySubdivision']['output']>;
  geoLocation?: Maybe<GeoPoint>;
};

export type StoneCrystalsFilterInput = {
  category?: InputMaybe<StoneCategoryCode>;
};

export type StoneGradesFilterInput = {
  category?: InputMaybe<StoneCategoryCode>;
};

export type StoneColorsFilterInput = {
  category?: InputMaybe<StoneCategoryCode>;
};

export type StoneClarityFilterInput = {
  category?: InputMaybe<StoneCategoryCode>;
};

export type StoneShapeFilterInput = {
  category?: InputMaybe<StoneCategoryCode>;
};

export type Stone = {
  id: Scalars['ID']['output'];
  crystal?: Maybe<StoneCrystal>;
  color?: Maybe<StoneColor>;
  colorGrade?: Maybe<StoneGrade>;
  cut?: Maybe<StoneCut>;
  polish?: Maybe<StonePolish>;
  symmetry?: Maybe<StoneSymmetry>;
  fluorescence?: Maybe<StoneFluorescence>;
  clarity?: Maybe<StoneClarity>;
  shape?: Maybe<StoneShape>;
  photo?: Maybe<Scalars['Uri']['output']>;
  ratio?: Maybe<Scalars['Decimal']['output']>;
  tablePercent: Scalars['Decimal']['output'];
  depthPercent: Scalars['Decimal']['output'];
  caratWeight: Scalars['Decimal']['output'];
  measurements: StoneMeasurements;
  certificate?: Maybe<StoneCertificate>;
};

export type StoneCertificate = {
  number: Scalars['String']['output'];
  uri: Scalars['Uri']['output'];
};

export type StoneMeasurements = {
  width: Scalars['Decimal']['output'];
  depth: Scalars['Decimal']['output'];
  length: Scalars['Decimal']['output'];
};

export type StonePolishCode =
  | 'EXCELLENT'
  | 'VERY_GOOD'
  | 'GOOD'
  | 'FAIR'
  | 'IDEAL';

export type StonePolish = {
  systemCode: StonePolishCode;
  abbreviation: Scalars['String']['output'];
  translation: StonePolishTranslation;
};


export type StonePolishtranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StonePolishTranslation = {
  name: Scalars['String']['output'];
};

export type StoneSymmetryCode =
  | 'EXCELLENT'
  | 'VERY_GOOD'
  | 'GOOD'
  | 'FAIR'
  | 'IDEAL';

export type StoneSymmetry = {
  systemCode: StoneSymmetryCode;
  translation: StoneSymmetryTranslation;
};


export type StoneSymmetrytranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneSymmetryTranslation = {
  name: Scalars['String']['output'];
};

export type StoneFluorescenceCode =
  | 'NONE'
  | 'FAINT'
  | 'MEDIUM'
  | 'STRONG'
  | 'VERY_STRONG';

export type StoneFluorescence = {
  systemCode: StoneFluorescenceCode;
  translation: StoneFluorescenceTranslation;
};


export type StoneFluorescencetranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneFluorescenceTranslation = {
  name: Scalars['String']['output'];
};

export type StoneShapeCode =
  | 'ROUND'
  | 'CUSHION'
  | 'PRINCESS'
  | 'EMERALD'
  | 'OVAL'
  | 'ASSCHER'
  | 'MARQUISE'
  | 'PEAR'
  | 'HEART'
  | 'HALF_MOON'
  | 'STRAIGHT_BAGUETTE'
  | 'TAPERED_BAGUETTE'
  | 'TRAPEZOID'
  | 'TRIANGULAR'
  | 'CABOCHON'
  | 'RADIANT'
  | 'HEXAGONAL'
  | 'ROSE'
  | 'EUROPEAN'
  | 'OLD_MINERS'
  | 'CIRCULAR'
  | 'OCTAGONAL'
  | 'CUSTOM'
  | 'TRILLION'
  | 'STEP_CUT_TRAPEZOID'
  | 'BRILLIANT_CUT_TRAPEZOID'
  | 'KITE'
  | 'BULLET'
  | 'CARRE'
  | 'SQUARE_FRENCH'
  | 'RECTANGULAR_FRENCH';

export type StoneShape = {
  systemCode: StoneShapeCode;
  icon?: Maybe<Asset>;
  samplePhoto?: Maybe<Asset>;
  translation: StoneShapeTranslation;
};


export type StoneShapetranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneShapeTranslation = {
  name: Scalars['String']['output'];
};

export type StoneCrystalCode =
  | 'DIAMOND'
  | 'FANCY_DIAMOND'
  | 'RUBY'
  | 'SAPPHIRE'
  | 'EMERALD'
  | 'TSAVORITE'
  | 'SPINEL'
  | 'TOURMALINE'
  | 'TANZANITE'
  | 'AQUAMARINE'
  | 'CITRINE'
  | 'PERIDOT'
  | 'MORGANITE'
  | 'TOPAZ'
  | 'ALEXANDRITE'
  | 'GARNET'
  | 'AMETHYST'
  | 'LAB_GROWN_DIAMOND'
  | 'ZIRCON';

export type StoneCrystal = {
  systemCode: StoneCrystalCode;
  translation: StoneCrystalTranslation;
};


export type StoneCrystaltranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneCrystalTranslation = {
  name: Scalars['String']['output'];
};

export type StoneColorCode =
  | 'DIAMOND_D'
  | 'DIAMOND_E'
  | 'DIAMOND_F'
  | 'DIAMOND_G'
  | 'DIAMOND_H'
  | 'DIAMOND_I'
  | 'DIAMOND_J'
  | 'FANCY_DIAMOND_RED'
  | 'FANCY_DIAMOND_ORANGISH_RED'
  | 'FANCY_DIAMOND_REDDISH_ORANGE'
  | 'FANCY_DIAMOND_ORANGE'
  | 'FANCY_DIAMOND_YELLOWISH_ORANGE'
  | 'FANCY_DIAMOND_YELLOW_ORANGE'
  | 'FANCY_DIAMOND_ORANGE_YELLOW'
  | 'FANCY_DIAMOND_ORANGISH_YELLOW'
  | 'FANCY_DIAMOND_YELLOW'
  | 'FANCY_DIAMOND_GREENISH_YELLOW'
  | 'FANCY_DIAMOND_GREEN_YELLOW'
  | 'FANCY_DIAMOND_YELLOW_GREEN'
  | 'FANCY_DIAMOND_YELLOWISH_GREEN'
  | 'FANCY_DIAMOND_GREEN'
  | 'FANCY_DIAMOND_BLUISH_GREEN'
  | 'FANCY_DIAMOND_BLUE_GREEN'
  | 'FANCY_DIAMOND_GREEN_BLUE'
  | 'FANCY_DIAMOND_GREENISH_BLUE'
  | 'FANCY_DIAMOND_BLUE'
  | 'FANCY_DIAMOND_VIOLETISH_BLUE'
  | 'FANCY_DIAMOND_BLUISH_VIOLET'
  | 'FANCY_DIAMOND_VIOLET'
  | 'FANCY_DIAMOND_PURPLE'
  | 'FANCY_DIAMOND_REDDISH_PURPLE'
  | 'FANCY_DIAMOND_RED_PURPLE'
  | 'FANCY_DIAMOND_PURPLE_RED'
  | 'FANCY_DIAMOND_PURPLISH_RED'
  | 'FANCY_DIAMOND_PINKISH_PURPLE'
  | 'FANCY_DIAMOND_PINK_PURPLE'
  | 'FANCY_DIAMOND_PURPLE_PINK'
  | 'FANCY_DIAMOND_PURPLISH_PINK'
  | 'FANCY_DIAMOND_PINK'
  | 'FANCY_DIAMOND_BROWNISH_PINK'
  | 'FANCY_DIAMOND_BROWN_PINK'
  | 'FANCY_DIAMOND_PINK_BROWN'
  | 'FANCY_DIAMOND_PINKISH_BROWN'
  | 'FANCY_DIAMOND_BROWN'
  | 'FANCY_DIAMOND_ORANGISH_PINK'
  | 'FANCY_DIAMOND_ORANGE_PINK'
  | 'FANCY_DIAMOND_PINK_ORANGE'
  | 'FANCY_DIAMOND_PINKISH_ORANGE'
  | 'FANCY_DIAMOND_ORANGISH_BROWN'
  | 'FANCY_DIAMOND_ORANGE_BROWN'
  | 'FANCY_DIAMOND_BROWN_ORANGE'
  | 'FANCY_DIAMOND_BROWNISH_ORANGE'
  | 'FANCY_DIAMOND_YELLOWISH_BROWN'
  | 'FANCY_DIAMOND_YELLOW_BROWN'
  | 'FANCY_DIAMOND_BROWN_YELLOW'
  | 'FANCY_DIAMOND_BROWNISH_YELLOW'
  | 'FANCY_DIAMOND_GRAY_GREEN'
  | 'FANCY_DIAMOND_GRAY_BLUE'
  | 'FANCY_DIAMOND_GRAY_VIOLET'
  | 'FANCY_DIAMOND_GRAY_PURPLE'
  | 'FANCY_DIAMOND_BROWN_PURPLE'
  | 'FANCY_DIAMOND_BLACK'
  | 'FANCY_DIAMOND_GRAY'
  | 'FANCY_DIAMOND_WHITE'
  | 'GEMSTONE_PURPLE'
  | 'GEMSTONE_REDDISH_PURPLE'
  | 'GEMSTONE_RED_PURPLE'
  | 'GEMSTONE_RED'
  | 'GEMSTONE_ORANGY_RED'
  | 'GEMSTONE_RED_ORANGE'
  | 'GEMSTONE_REDDISH_ORANGE'
  | 'GEMSTONE_ORANGE'
  | 'GEMSTONE_YELLOWISH_ORANGE'
  | 'GEMSTONE_ORANGY_YELLOW'
  | 'GEMSTONE_YELLOW'
  | 'GEMSTONE_GREENISH_YELLOW'
  | 'GEMSTONE_YELLOW_GREEN'
  | 'GEMSTONE_YELLOWISH_GREEN'
  | 'GEMSTONE_GREEN'
  | 'GEMSTONE_BLUISH_GREEN'
  | 'GEMSTONE_GREEN_BLUE'
  | 'GEMSTONE_GREENISH_BLUE'
  | 'GEMSTONE_BLUE'
  | 'GEMSTONE_VIOLETISH_BLUE'
  | 'GEMSTONE_BLUISH_VIOLET'
  | 'GEMSTONE_VIOLET'
  | 'GEMSTONE_VIOLETISH_PURPLE'
  | 'GEMSTONE_PINK'
  | 'GEMSTONE_WHITE'
  | 'GEMSTONE_ACHROITE_COLOURLESS'
  | 'GEMSTONE_CATS_EYE'
  | 'GEMSTONE_CANARY_YELLOW'
  | 'GEMSTONE_CHROME_DEEP_GREEN'
  | 'GEMSTONE_DRAVITE_BROWN'
  | 'GEMSTONE_ELBAITE'
  | 'GEMSTONE_PARAIBA'
  | 'GEMSTONE_SCHORL_BLACK'
  | 'GEMSTONE_SIBERITE_PURPLE'
  | 'GEMSTONE_VERDELITE_PURPLE'
  | 'GEMSTONE_WATERMELON'
  | 'GEMSTONE_RUBELLITE'
  | 'DIAMOND_K'
  | 'FANCY_DIAMOND_ACHRIOTE_COLOURLESS'
  | 'FANCY_DIAMOND_BLUE_GRAY'
  | 'FANCY_DIAMOND_BLUE_VIOLET'
  | 'FANCY_DIAMOND_BLUISH_GRAY'
  | 'FANCY_DIAMOND_BROWN_GREEN'
  | 'FANCY_DIAMOND_BROWN_RED'
  | 'FANCY_DIAMOND_BROWNISH_GREEN'
  | 'FANCY_DIAMOND_BROWNISH_PURPLE'
  | 'FANCY_DIAMOND_BROWNISH_RED'
  | 'FANCY_DIAMOND_CANARY_YELLOW'
  | 'FANCY_DIAMOND_CATS_EYE'
  | 'FANCY_DIAMOND_CHAMELEON'
  | 'FANCY_DIAMOND_CHAMPAGNE'
  | 'FANCY_DIAMOND_CHOCOLATE'
  | 'FANCY_DIAMOND_CHROME_DEEP_GREEN'
  | 'FANCY_DIAMOND_COGNAC'
  | 'FANCY_DIAMOND_COLOR_CHANGE'
  | 'FANCY_DIAMOND_DRAVITE_BROWN'
  | 'FANCY_DIAMOND_ELBAITE'
  | 'FANCY_DIAMOND_GRAYISH_BLUE'
  | 'FANCY_DIAMOND_GRAYISH_GREEN'
  | 'FANCY_DIAMOND_GRAYISH_PURPLE'
  | 'FANCY_DIAMOND_GRAYISH_VIOLET'
  | 'FANCY_DIAMOND_GREEN_BROWN'
  | 'FANCY_DIAMOND_GREEN_GRAY'
  | 'FANCY_DIAMOND_GREENISH_BROWN'
  | 'FANCY_DIAMOND_GREENISH_GRAY'
  | 'FANCY_DIAMOND_ORANGE_RED'
  | 'FANCY_DIAMOND_ORANGY_BROWN'
  | 'FANCY_DIAMOND_ORANGY_PINK'
  | 'FANCY_DIAMOND_ORANGY_RED'
  | 'FANCY_DIAMOND_ORANGY_YELLOW'
  | 'FANCY_DIAMOND_PADPARADSCHA'
  | 'FANCY_DIAMOND_PARAIBA'
  | 'FANCY_DIAMOND_PEACH'
  | 'FANCY_DIAMOND_PINKISH_RED'
  | 'FANCY_DIAMOND_PURPLE_GRAY'
  | 'FANCY_DIAMOND_PURPLISH_GRAY'
  | 'FANCY_DIAMOND_RED_BROWN'
  | 'FANCY_DIAMOND_RED_ORANGE'
  | 'FANCY_DIAMOND_REDDISH_BROWN'
  | 'FANCY_DIAMOND_RUBELLITE'
  | 'FANCY_DIAMOND_SCHORL_BLACK'
  | 'FANCY_DIAMOND_SIBERITE_PURPLE'
  | 'FANCY_DIAMOND_TEAL'
  | 'FANCY_DIAMOND_TURQUOISE'
  | 'FANCY_DIAMOND_VERDELITE_PURPLE'
  | 'FANCY_DIAMOND_VIOLET_BLUE'
  | 'FANCY_DIAMOND_VIOLET_GRAY'
  | 'FANCY_DIAMOND_VIOLETISH_GRAY'
  | 'FANCY_DIAMOND_WATERMELON'
  | 'FANCY_DIAMOND_YELLOW_GRAY'
  | 'FANCY_DIAMOND_YELLOWISH_GRAY'
  | 'GEMSTONE_BLACK'
  | 'GEMSTONE_BLUE_GREEN'
  | 'GEMSTONE_BLUE_GRAY'
  | 'GEMSTONE_BLUE_VIOLET'
  | 'GEMSTONE_BLUISH_GRAY'
  | 'GEMSTONE_BROWN'
  | 'GEMSTONE_BROWN_GREEN'
  | 'GEMSTONE_BROWN_ORANGE'
  | 'GEMSTONE_BROWN_PINK'
  | 'GEMSTONE_BROWN_PURPLE'
  | 'GEMSTONE_BROWN_RED'
  | 'GEMSTONE_BROWN_YELLOW'
  | 'GEMSTONE_BROWNISH_GREEN'
  | 'GEMSTONE_BROWNISH_ORANGE'
  | 'GEMSTONE_BROWNISH_PINK'
  | 'GEMSTONE_BROWNISH_PURPLE'
  | 'GEMSTONE_BROWNISH_RED'
  | 'GEMSTONE_BROWNISH_YELLOW'
  | 'GEMSTONE_CHAMELEON'
  | 'GEMSTONE_CHAMPAGNE'
  | 'GEMSTONE_CHOCOLATE'
  | 'GEMSTONE_COGNAC'
  | 'GEMSTONE_COLOR_CHANGE'
  | 'GEMSTONE_GREEN_BROWN'
  | 'GEMSTONE_GREEN_GRAY'
  | 'GEMSTONE_GREEN_YELLOW'
  | 'GEMSTONE_GREENISH_BROWN'
  | 'GEMSTONE_GREENISH_GRAY'
  | 'GEMSTONE_GRAY'
  | 'GEMSTONE_GRAY_BLUE'
  | 'GEMSTONE_GRAY_GREEN'
  | 'GEMSTONE_GRAY_GREENISH_YELLOW'
  | 'GEMSTONE_GRAY_PURPLE'
  | 'GEMSTONE_GRAY_VIOLET'
  | 'GEMSTONE_GRAY_YELLOWISH_GREEN'
  | 'GEMSTONE_GRAYISH_GREEN'
  | 'GEMSTONE_GRAYISH_PURPLE'
  | 'GEMSTONE_GRAYISH_VIOLET'
  | 'GEMSTONE_ORANGE_BROWN'
  | 'GEMSTONE_ORANGE_PINK'
  | 'GEMSTONE_ORANGE_RED'
  | 'GEMSTONE_ORANGE_YELLOW'
  | 'GEMSTONE_ORANGY_BROWN'
  | 'GEMSTONE_ORANGY_PINK'
  | 'GEMSTONE_PADPARADSCHA'
  | 'GEMSTONE_PEACH'
  | 'GEMSTONE_PINK_BROWN'
  | 'GEMSTONE_PINK_PURPLE'
  | 'GEMSTONE_PINKISH_BROWN'
  | 'GEMSTONE_PINKISH_PURPLE'
  | 'GEMSTONE_PINKISH_RED'
  | 'GEMSTONE_PURPLE_PINK'
  | 'GEMSTONE_PURPLE_RED'
  | 'GEMSTONE_PURPLE_GRAY'
  | 'GEMSTONE_PURPLISH_GRAY'
  | 'GEMSTONE_PURPLISH_PINK'
  | 'GEMSTONE_PURPLISH_RED'
  | 'GEMSTONE_RED_BROWN'
  | 'GEMSTONE_REDDISH_BROWN'
  | 'GEMSTONE_TEAL'
  | 'GEMSTONE_TURQUOISE'
  | 'GEMSTONE_VIOLET_BLUE'
  | 'GEMSTONE_VIOLET_GRAY'
  | 'GEMSTONE_VIOLETISH_GRAY'
  | 'GEMSTONE_YELLOW_GRAY'
  | 'GEMSTONE_YELLOW_BROWN'
  | 'GEMSTONE_YELLOW_ORANGE'
  | 'GEMSTONE_BI_COLOUR'
  | 'GEMSTONE_YELLOWISH_BROWN'
  | 'GEMSTONE_YELLOWISH_GRAY'
  | 'DIAMOND_L'
  | 'DIAMOND_M';

export type StoneColor = {
  systemCode: StoneColorCode;
  translation: StoneColorTranslation;
};


export type StoneColortranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneColorTranslation = {
  name: Scalars['String']['output'];
};

export type StoneCutCode =
  | 'EXCELLENT'
  | 'VERY_GOOD'
  | 'GOOD'
  | 'IDEAL';

export type StoneCut = {
  systemCode: StoneCutCode;
  translation: StoneCutTranslation;
};


export type StoneCuttranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneCutTranslation = {
  name: Scalars['String']['output'];
};

export type StoneClarityCode =
  | 'DIAMOND_FL'
  | 'DIAMOND_IF'
  | 'DIAMOND_VVS1'
  | 'DIAMOND_VVS2'
  | 'DIAMOND_VS1'
  | 'DIAMOND_VS2'
  | 'DIAMOND_SI1'
  | 'DIAMOND_SI2'
  | 'GEMSTONE_SLIGHTLY_INCLUDED'
  | 'GEMSTONE_INCLUDED'
  | 'GEMSTONE_EYE_CLEAN'
  | 'GEMSTONE_LOUPE_CLEAN';

export type StoneClarity = {
  systemCode: StoneClarityCode;
  abbreviation: Scalars['String']['output'];
  translation: StoneClarityTranslation;
};


export type StoneClaritytranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneClarityTranslation = {
  name: Scalars['String']['output'];
};

export type Melee = {
  id: Scalars['ID']['output'];
  caratWeight: Scalars['Decimal']['output'];
  crystal: StoneCrystal;
  shape: StoneShape;
  colors: Array<StoneColor>;
  clarities: Array<StoneClarity>;
  grade?: Maybe<StoneGrade>;
  width: Scalars['String']['output'];
};

export type StoneGradeCode =
  | 'FANCY_DIAMOND_FAINT'
  | 'FANCY_DIAMOND_VERY_LIGHT'
  | 'FANCY_DIAMOND_LIGHT'
  | 'FANCY_DIAMOND_FANCY_LIGHT'
  | 'FANCY_DIAMOND_FANCY'
  | 'FANCY_DIAMOND_FANCY_INTENSE'
  | 'FANCY_DIAMOND_FANCY_DARK'
  | 'FANCY_DIAMOND_FANCY_DEEP'
  | 'FANCY_DIAMOND_FANCY_VIVID'
  | 'GEMSTONE_VERY_LIGHT'
  | 'GEMSTONE_LIGHT'
  | 'GEMSTONE_MEDIUM_LIGHT'
  | 'GEMSTONE_MEDIUM'
  | 'GEMSTONE_MEDIUM_DARK'
  | 'GEMSTONE_DARK'
  | 'GEMSTONE_VERY_DARK'
  | 'GEMSTONE_HOT';

export type StoneGrade = {
  systemCode: StoneGradeCode;
  translation: StoneGradeTranslation;
  category: StoneCategory;
};


export type StoneGradetranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneGradeTranslation = {
  name: Scalars['String']['output'];
};

export type StoneCategoryCode =
  | 'DIAMOND'
  | 'FANCY_DIAMOND'
  | 'GEMSTONE'
  | 'LAB_GROWN_DIAMOND';

export type StoneCategory = {
  systemCode: StoneCategoryCode;
  translation: StoneCategoryTranslation;
};


export type StoneCategorytranslationArgs = {
  locale: Scalars['Locale']['input'];
};

export type StoneCategoryTranslation = {
  name: Scalars['String']['output'];
};

export type GemType =
  | 'NATURAL_DIAMOND'
  | 'LAB_GROWN_DIAMOND';

export type Language = {
  locale: Scalars['Locale']['output'];
  translations: Array<Translation>;
};

export type Translation = {
  token: Scalars['ID']['output'];
  translation: Scalars['String']['output'];
};

export type DesignInspiration = {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Customer = {
  id: Scalars['ID']['output'];
  shippingAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  disabledThirdPartyCookies: Scalars['Boolean']['output'];
  designInspiration?: Maybe<DesignInspiration>;
  user: User;
  ordersByConsultationPurpose: Array<Order>;
  consultant?: Maybe<Consultant>;
  cart: Order;
  orders: Array<Order>;
  order?: Maybe<Order>;
  questionnaireByType?: Maybe<QuestionnaireCompletedQuestionnaire>;
  enquiries: Array<Enquiry>;
  designStudioProducts: Array<DesignStudioProduct>;
  designStudioProduct?: Maybe<DesignStudioProduct>;
  engagementRingRecommendations?: Maybe<UserCustomerEngagementRingRecommendations>;
};


export type CustomerordersByConsultationPurposeArgs = {
  purpose: BookingConsultationPurposeCode;
};


export type CustomerorderArgs = {
  id: Scalars['ID']['input'];
};


export type CustomerquestionnaireByTypeArgs = {
  type: QuestionnaireType;
};


export type CustomerdesignStudioProductArgs = {
  id: Scalars['ID']['input'];
};

export type Address = {
  country?: Maybe<Scalars['Country']['output']>;
  phoneNumber?: Maybe<PhoneNumberType>;
};

export type MagicLinkConsumeSuccess = {
  login: LoginResponseSuccess;
};

export type MagicLinkConsumeError = {
  message: Scalars['String']['output'];
};

export type MagicLinkConsumeResponse = MagicLinkConsumeSuccess | MagicLinkConsumeError;

export type MagicLinkConsume = {
  email: Scalars['Email']['input'];
  hash: Scalars['String']['input'];
  expires: Scalars['Int']['input'];
};

export type MagicLinkRequest = {
  redirect: Scalars['Uri']['input'];
  email: Scalars['Email']['input'];
};

export type CustomerRegistrationResponse = {
  login?: Maybe<LoginResponseSuccess>;
};

export type CustomerRegistrationInput = {
  byManual?: InputMaybe<CustomerRegistrationByManualInput>;
  byGoogle?: InputMaybe<CustomerRegistrationByGoogleInput>;
};

export type CustomerRegistrationByManualInput = {
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['Email']['input'];
  phone?: InputMaybe<PhoneNumberInput>;
  region: RegionCode;
  currency: CurrencyInput;
  emailConsent: Scalars['Boolean']['input'];
  privacyConsent: Scalars['Boolean']['input'];
  forgottenPasswordUrl: Scalars['Uri']['input'];
};

export type CustomerRegistrationByGoogleInput = {
  token: Scalars['String']['input'];
  region: RegionCode;
  currency: CurrencyInput;
  phone?: InputMaybe<PhoneNumberInput>;
  forgottenPasswordUrl: Scalars['Uri']['input'];
};

export type User = {
  id: Scalars['ID']['output'];
  email: Scalars['Email']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  isConsultant: Scalars['Boolean']['output'];
  customer?: Maybe<Customer>;
};

export type CredentialsInput = {
  identifier: Scalars['Email']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = LoginResponseSuccess | LoginResponseFailure;

export type LoginResponseFailure = {
  message: Scalars['String']['output'];
  code: LoginResponseErrorCode;
};


export type LoginResponseFailuremessageArgs = {
  locale: Scalars['Locale']['input'];
};

export type LoginResponseErrorCode =
  | 'INVALID_CREDENTIALS';

export type LoginResponseSuccess = {
  jwt: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type EnquiryDiamondSearchProduct = {
  uri: Scalars['Uri']['input'];
  gemsApiStoneIdentifier: Scalars['ID']['input'];
  currency: CurrencyInput;
  region: RegionCode;
  baseInput?: InputMaybe<EnquiryBaseInput>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
};

export type EnquiryEngagementRingCollectionInput = {
  uri: Scalars['Uri']['input'];
  catalogueEngagementRingFilter: CatalogueEngagementRingFilterInput;
  baseInput?: InputMaybe<EnquiryBaseInput>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
};

export type EnquiryCustomEngagementRing = {
  catalogueEngagementRingFilter: CatalogueEngagementRingFilterInput;
  uri: Scalars['Uri']['input'];
  baseInput?: InputMaybe<EnquiryBaseInput>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
};

export type EnquiryInput = {
  uri: Scalars['Uri']['input'];
  type: EnquiryType;
  image?: InputMaybe<EnquiryImageInput>;
  baseInput?: InputMaybe<EnquiryBaseInput>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
};

export type EnquiryImageInput = {
  uri: Scalars['Uri']['input'];
  name: Scalars['String']['input'];
};

export type EnquiryContactUsInput = {
  uri: Scalars['Uri']['input'];
  purpose: EnquiryContactUsEnquiryPurpose;
  instructions: Scalars['String']['input'];
  baseInput?: InputMaybe<EnquiryBaseInput>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
};

export type EnquiryContactUsEnquiryPurpose =
  | 'PRODUCT'
  | 'RETURNING'
  | 'AFTERCARE';

export type EnquiryResponseExistingCustomer = {
  marketingCloudForm: Scalars['String']['output'];
};

export type EnquiryResponseNewCustomer = {
  customer: CustomerRegistrationResponse;
  marketingCloudForm: Scalars['String']['output'];
};

export type EnquiryType =
  | 'ENGAGEMENT_RING'
  | 'WEDDING_RING'
  | 'BLOG_POST'
  | 'WEDDING_RING_BESPOKE_LANDING'
  | 'JEWELLERY_PRODUCT_LANDING_GENERIC'
  | 'ENGAGEMENT_RING_BROWSE';

export type Enquiry = EnquiryConsultation | EnquiryWeddingRingAddToCart | EnquiryEngagementRingAddToCart;

export type EnquiryConsultation = {
  id: Scalars['ID']['output'];
  consultation: BookingConsultation;
};

export type EnquiryWeddingRingAddToCart = {
  product: DesignStudioProductWeddingRing;
};

export type EnquiryEngagementRingAddToCart = {
  product: DesignStudioProductEngagementRing;
};

export type EnquiryBaseInput = {
  uri: Scalars['Uri']['input'];
  region: RegionCode;
  currency: CurrencyInput;
};

export type GemsApiPriceBounds = {
  min?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
};

export type ConvertPriceBoundsForGems = {
  region: RegionCode;
  currency: CurrencyInput;
  min?: InputMaybe<Scalars['Decimal']['input']>;
  max?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CalculateGemsApiStoneTotalSalePriceInput = {
  priceUsd: Scalars['Float']['input'];
  region: RegionCode;
  currency: CurrencyInput;
};

export type NonSkuLabGrownPricingCellFilters = {
  gradeDimensionId?: InputMaybe<Scalars['ID']['input']>;
};

export type NonSkuGemStonesPricingCellFilters = {
  colorCrystalDimensionId?: InputMaybe<Scalars['ID']['input']>;
  gradeClarityDimensionId?: InputMaybe<Scalars['ID']['input']>;
};

export type NonSkuGemstoneImage = {
  id: Scalars['ID']['output'];
  image?: Maybe<NonSkuImage>;
  shapeDimension?: Maybe<NonSkuGemstoneShapeDimension>;
  colorCrystalDimension?: Maybe<NonSkuGemstoneType>;
};

export type NonSkuGemstoneCaratDimension = {
  id: Scalars['ID']['output'];
  caratWeight: Scalars['Decimal']['output'];
};

export type NonSkuGemstoneShapeDimension = {
  id: Scalars['ID']['output'];
  shape: StoneShape;
};

export type NonSkuGemstoneGradeClarityDimension = {
  id: Scalars['ID']['output'];
  grade: StoneGrade;
  clarity: StoneClarity;
};

export type NonSkuLabGrownShapeDimensionUpdateInput = {
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type NonSkuGemstoneImageUpdateInput = {
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type NonSkuGemstoneImageCreateInput = {
  colorCrystalDimensionId: Scalars['ID']['input'];
  shapeDimensionId: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type NonSkuGemStoneCreateInput = {
  caratDimensionId: Scalars['ID']['input'];
  colorCrystalDimensionId: Scalars['ID']['input'];
  gradeClarityDimensionId: Scalars['ID']['input'];
  shapeDimensionId: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type NonSkuGemstoneCaratDimensionCreateInput = {
  caratWeight: Scalars['Decimal']['input'];
};

export type NonSkuGemstoneColorCrystalDimensionCreateInput = {
  color: StoneColorCode;
  crystal: StoneCrystalCode;
};

export type NonSkuGemstoneGradeClarityDimensionCreateInput = {
  grade: StoneGradeCode;
  clarity: StoneClarityCode;
};

export type NonSkuGemstoneShapeDimensionCreateInput = {
  shape: StoneShapeCode;
};

export type NonSkuLabGrownDiamondCreateInput = {
  gradeDimensionId: Scalars['ID']['input'];
  shapeDimensionId: Scalars['ID']['input'];
  caratDimensionId: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type NonSkuLabGrownCaratDimensionCreateInput = {
  caratWeight: Scalars['Decimal']['input'];
};

export type NonSkuLabGrownShapeDimensionCreateInput = {
  shape: StoneShapeCode;
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type NonSkuLabGrownGradeDimensionCreateInput = {
  color: StoneColorCode;
  clarity: StoneClarityCode;
};

export type NonSkuImage = {
  id: Scalars['ID']['output'];
  url: Scalars['Uri']['output'];
  mimeType: Scalars['String']['output'];
  sources: Array<ImageSrc>;
  size: ImageSize;
};


export type NonSkuImagesizeArgs = {
  name: ImageSizeName;
};

export type NonSkuLabGrownGradeDimension = {
  id: Scalars['ID']['output'];
  clarity: StoneClarity;
  color: StoneColor;
};

export type NonSkuLabGrownShapeDimension = {
  id: Scalars['ID']['output'];
  shape: StoneShape;
  image?: Maybe<NonSkuImage>;
};

export type NonSkuLabGrownCaratDimension = {
  id: Scalars['ID']['output'];
  caratWeight: Scalars['Decimal']['output'];
};

export type NonSkuGemstoneFilters = {
  shape?: InputMaybe<StoneShapeCode>;
  priceRange?: InputMaybe<NonSkuPriceRangeInput>;
  caratWeightRange?: InputMaybe<NonSkuCaratWeightRangeInput>;
  crystals?: InputMaybe<Array<StoneCrystalCode>>;
  colors?: InputMaybe<Array<StoneColorCode>>;
};

export type NonSkuGemstoneSortInput = {
  field: NonSkuGemstoneSortField;
  direction?: NonSkuSortDirection;
};

export type NonSkuGemstoneSortField =
  | 'PRICE'
  | 'CARAT';

export type NonSkuGemstonesBounds = {
  price?: Maybe<NonSkuPriceRange>;
  caratWeight: NonSkuCaratWeightRange;
  shapes: Array<StoneShape>;
  types: Array<NonSkuGemstoneType>;
};


export type NonSkuGemstonesBoundspriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type NonSkuGemstoneType = {
  id: Scalars['ID']['output'];
  color: StoneColor;
  crystal: StoneCrystal;
};

export type NonSkuCaratWeightRangeInput = {
  min?: InputMaybe<Scalars['Decimal']['input']>;
  max?: InputMaybe<Scalars['Decimal']['input']>;
};

export type NonSkuPriceRange = {
  min: Money;
  max: Money;
};

export type NonSkuCaratWeightRange = {
  min: Scalars['Decimal']['output'];
  max: Scalars['Decimal']['output'];
};

export type NonSkuLabGrownDiamondsBounds = {
  price?: Maybe<NonSkuPriceRange>;
  caratWeight: NonSkuCaratWeightRange;
  shapes: Array<StoneShape>;
  colors: Array<StoneColor>;
};


export type NonSkuLabGrownDiamondsBoundspriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type NonSkuLabGrownDiamondSortInput = {
  field: NonSkuLabGrownSortField;
  direction?: NonSkuSortDirection;
};

export type NonSkuSortDirection =
  | 'ASC'
  | 'DESC';

export type NonSkuLabGrownSortField =
  | 'PRICE'
  | 'CARAT';

export type NonSkuPriceRangeInput = {
  min?: InputMaybe<MoneyInput>;
  max?: InputMaybe<MoneyInput>;
};

export type NonSkuLabGrownDiamondsFilters = {
  shape?: InputMaybe<StoneShapeCode>;
  priceRange?: InputMaybe<NonSkuPriceRangeInput>;
  caratWeightRange?: InputMaybe<NonSkuCaratWeightRangeInput>;
  colors?: InputMaybe<Array<StoneColorCode>>;
};

export type NonSkuLabGrownDiamondFilterInput = {
  shape: StoneShapeCode;
  color: StoneColorCode;
  clarity: StoneClarityCode;
  carat: Scalars['Decimal']['input'];
};

export type NonSkuGemstoneFilterInput = {
  shape: StoneShapeCode;
  grade: StoneGradeCode;
  clarity: StoneClarityCode;
  color: StoneColorCode;
  crystal: StoneCrystalCode;
  carat: Scalars['Decimal']['input'];
};

export type NonSkuInterface = {
  shape: StoneShape;
  caratWeight: Scalars['Decimal']['output'];
  image?: Maybe<NonSkuImage>;
};

export type HistoricalNonSku = HistoricalNonSkuLabGrown | HistoricalNonSkuGemstone;

export type NonSkuLabGrownInterface = {
  color: StoneColor;
  clarity: StoneClarity;
};

export type NonSkuGemStoneInterface = {
  cut: StoneCut;
  caratWeight: Scalars['Decimal']['output'];
  crystal: StoneCrystal;
  colorGrade: StoneGrade;
  color: StoneColor;
  clarity: StoneClarity;
};

export type HistoricalNonSkuLabGrown = NonSkuLabGrownInterface & NonSkuInterface & {
  id: Scalars['ID']['output'];
  shape: StoneShape;
  salePrice: Money;
  caratWeight: Scalars['Decimal']['output'];
  color: StoneColor;
  clarity: StoneClarity;
  image?: Maybe<NonSkuImage>;
};


export type HistoricalNonSkuLabGrownsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type NonSkuLabGrown = NonSkuLabGrownInterface & NonSkuInterface & {
  id: Scalars['ID']['output'];
  salePrice?: Maybe<Money>;
  shape: StoneShape;
  caratWeight: Scalars['Decimal']['output'];
  color: StoneColor;
  clarity: StoneClarity;
  image?: Maybe<NonSkuImage>;
  uniqueImage?: Maybe<NonSkuImage>;
  sampleImage?: Maybe<NonSkuImage>;
  shapeDimension: NonSkuLabGrownShapeDimension;
  gradeDimension: NonSkuLabGrownGradeDimension;
  caratDimension: NonSkuLabGrownCaratDimension;
};


export type NonSkuLabGrownsalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type HistoricalNonSkuGemstone = NonSkuGemStoneInterface & NonSkuInterface & {
  id: Scalars['ID']['output'];
  shape: StoneShape;
  salePrice: Money;
  cut: StoneCut;
  caratWeight: Scalars['Decimal']['output'];
  crystal: StoneCrystal;
  colorGrade: StoneGrade;
  color: StoneColor;
  clarity: StoneClarity;
  image?: Maybe<NonSkuImage>;
};


export type HistoricalNonSkuGemstonesalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type NonSkuGemstone = NonSkuGemStoneInterface & NonSkuInterface & {
  id: Scalars['ID']['output'];
  shape: StoneShape;
  salePrice?: Maybe<Money>;
  cut: StoneCut;
  caratWeight: Scalars['Decimal']['output'];
  crystal: StoneCrystal;
  colorGrade: StoneGrade;
  color: StoneColor;
  clarity: StoneClarity;
  image?: Maybe<NonSkuImage>;
  uniqueImage?: Maybe<NonSkuImage>;
  sampleImage?: Maybe<NonSkuImage>;
  shapeDimension: NonSkuGemstoneShapeDimension;
  gradeClarityDimension: NonSkuGemstoneGradeClarityDimension;
  caratDimension: NonSkuGemstoneCaratDimension;
  colorCrystalDimension: NonSkuGemstoneType;
};


export type NonSkuGemstonesalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type DesignStudioQuotationEngagementRingUpdate = {
  ringApproved?: InputMaybe<Scalars['Boolean']['input']>;
  stoneApproved?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DesignStudioProductEngagementRingUpdate = {
  size?: InputMaybe<RingSizeInput>;
  engraving?: InputMaybe<Scalars['String']['input']>;
};

export type DesignStudioProductWeddingRingUpdate = {
  size?: InputMaybe<RingSizeInput>;
  engraving?: InputMaybe<Scalars['String']['input']>;
};

export type DesignStudioProduct = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<Quotation>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  orderProduct: OrderProduct;
};

export type DesignStudioProductLooseStone = DesignStudioProduct & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<Quotation>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  orderProduct: OrderProduct;
};

export type DesignStudioProductAdditionalResize = DesignStudioProduct & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<Quotation>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  orderProduct: OrderProduct;
};

export type DesignStudioProductCustom = DesignStudioProduct & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<Quotation>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  orderProduct: OrderProduct;
};

export type DesignStudioProductGeneric = DesignStudioProduct & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<Quotation>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  orderProduct: OrderProduct;
  customer: Customer;
};

export type DesignStudioProductEngagementRing = DesignStudioProduct & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<QuotationEngagementRing>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  size?: Maybe<RingSizeOrRecommendedRingSize>;
  availableSizes: Array<RingSizeOrRecommendedRingSize>;
  engraving?: Maybe<Scalars['String']['output']>;
  orderProduct: OrderProduct;
};

export type DesignStudioMeleeItem = {
  id: Scalars['ID']['output'];
  melee: Melee;
  quantity: Scalars['Int']['output'];
};

export type DesignStudioProductWeddingRing = DesignStudioProduct & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  isAutofinalizable: Scalars['Boolean']['output'];
  quotations: Array<QuotationWeddingRing>;
  finalQuotation?: Maybe<Quotation>;
  cantBeReturned: Scalars['Boolean']['output'];
  cantBeResized: Scalars['Boolean']['output'];
  size?: Maybe<RingSizeOrRecommendedRingSize>;
  availableSizes: Array<RingSizeOrRecommendedRingSize>;
  engraving?: Maybe<Scalars['String']['output']>;
  orderProduct: OrderProduct;
};

export type Quotation = {
  id: Scalars['ID']['output'];
  customName?: Maybe<Scalars['String']['output']>;
  finalUntil?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Scalars['Uri']['output']>;
  images: Array<Scalars['Uri']['output']>;
  totalSalePrice: Money;
  isVatApplicable: Scalars['Boolean']['output'];
  isSalesTaxApplicable: Scalars['Boolean']['output'];
  baseTemplate?: Maybe<Scalars['String']['output']>;
  isRecommended: Scalars['Boolean']['output'];
  firstAvailableDeliveryDate: DeliveryDate;
};

export type QuotationManualSurcharge = {
  id: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  amount: Money;
};

export type QuotationPercentageSurcharge = {
  id: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  percent: Scalars['Decimal']['output'];
};

export type QuotationEngagementRing = Quotation & {
  id: Scalars['ID']['output'];
  customName?: Maybe<Scalars['String']['output']>;
  finalUntil?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Scalars['Uri']['output']>;
  images: Array<Scalars['Uri']['output']>;
  totalSalePrice: Money;
  isVatApplicable: Scalars['Boolean']['output'];
  isSalesTaxApplicable: Scalars['Boolean']['output'];
  baseTemplate?: Maybe<Scalars['String']['output']>;
  isRecommended: Scalars['Boolean']['output'];
  mount: DesignStudioEngagementRingMount;
  centreStone: DesignStudioEngagementRingCentreStone;
  firstAvailableDeliveryDate: DeliveryDate;
};

export type DesignStudioExternalSideStone = {
  id: Scalars['ID']['output'];
  weight?: Maybe<Scalars['Decimal']['output']>;
  crystal?: Maybe<StoneCrystal>;
};

export type DesignStudioExternalCentreStone = {
  id: Scalars['ID']['output'];
  weight?: Maybe<Scalars['Decimal']['output']>;
  crystal?: Maybe<StoneCrystal>;
};

export type DesignStudioInternalSideStone = {
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  item: DesignStudioSideStoneItem;
};

export type DesignStudioSideStone = DesignStudioInternalSideStone | DesignStudioExternalSideStone;

export type DesignStudioSideStoneItem = Stone | Melee;

export type DesignStudioSignatureStone = {
  id: Scalars['ID']['output'];
  melee: Melee;
};

export type DesignStudioEngagementRingMount = {
  id: Scalars['ID']['output'];
  salePrice: Money;
  manualSurcharges: Array<QuotationManualSurcharge>;
  percentageSurcharge?: Maybe<QuotationPercentageSurcharge>;
  metals: Array<Metal>;
  approved: Scalars['Boolean']['output'];
  sideStones: Array<DesignStudioSideStone>;
  melees: Array<DesignStudioMeleeItem>;
  signatureStones: Array<DesignStudioSignatureStone>;
  comment?: Maybe<Scalars['String']['output']>;
};

export type DesignStudioEngagementRingCentreStone = {
  id: Scalars['ID']['output'];
  stone: DesignStudioCentreStone;
  salePrice: Money;
  manualSurcharges: Array<QuotationManualSurcharge>;
  percentageSurcharge?: Maybe<QuotationPercentageSurcharge>;
  approved: Scalars['Boolean']['output'];
  comment?: Maybe<Scalars['String']['output']>;
};

export type DesignStudioCentreStone = DesignStudioInternalCentreStone | DesignStudioExternalCentreStone;

export type DesignStudioInternalCentreStone = {
  id: Scalars['ID']['output'];
  nonSku?: Maybe<HistoricalNonSku>;
  sku?: Maybe<Stone>;
};

export type QuotationWeddingRing = Quotation & {
  id: Scalars['ID']['output'];
  customName?: Maybe<Scalars['String']['output']>;
  finalUntil?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Scalars['Uri']['output']>;
  images: Array<Scalars['Uri']['output']>;
  totalSalePrice: Money;
  isVatApplicable: Scalars['Boolean']['output'];
  isSalesTaxApplicable: Scalars['Boolean']['output'];
  baseTemplate?: Maybe<Scalars['String']['output']>;
  signatureStones: Array<DesignStudioSignatureStone>;
  manualSurcharges: Array<QuotationManualSurcharge>;
  percentageSurcharge?: Maybe<QuotationPercentageSurcharge>;
  isRecommended: Scalars['Boolean']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  metals: Array<Metal>;
  firstAvailableDeliveryDate: DeliveryDate;
};

export type CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse = CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer;

export type CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse = CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer;

export type CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer = {
  order: Order;
  product: OrderProduct;
  customer: CustomerRegistrationResponse;
};

export type CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer = {
  order: Order;
  product: OrderProduct;
};

export type CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse = CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer;

export type CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse = CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer;

export type CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer = {
  order: Order;
  product: OrderProduct;
  customer: CustomerRegistrationResponse;
};

export type CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer = {
  order: Order;
  product: OrderProduct;
};

export type CatalogueDesignStudioCheckoutEngagementRingSuccess = CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart | CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio;

export type CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio = {
  product: DesignStudioProductEngagementRing;
};

export type CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart = {
  order: Order;
  checkoutProduct: OrderProduct;
  designStudioProduct: DesignStudioProductEngagementRing;
};

export type AddToCartReadyToGoRingInput = {
  catalogueReadyToGoRingCode: Scalars['ID']['input'];
  recommendedRingSizeId?: InputMaybe<Scalars['ID']['input']>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
  uri: Scalars['Uri']['input'];
  baseInput?: InputMaybe<EnquiryBaseInput>;
};

export type AddToCartReadyToGoRingNewCustomerResponse = AddToCartReadyToGoRingSuccessNewCustomer;

export type AddToCartReadyToGoRingExistingCustomerResponse = AddToCartReadyToGoRingSuccessExistingCustomer;

export type AddToCartReadyToGoRingSuccessNewCustomer = {
  order: Order;
  product: OrderProduct;
  customer: CustomerRegistrationResponse;
};

export type AddToCartReadyToGoRingSuccessExistingCustomer = {
  order: Order;
  product: OrderProduct;
};

export type StoneRecommendationNotFound = {
  haveWithoutPricingRange: Scalars['Boolean']['output'];
};

export type StoneRecommendationNonSkuLabGrownItem = NonSkuLabGrown | StoneRecommendationNotFound;

export type StoneRecommendationNonSkuGemstoneItem = NonSkuGemstone | StoneRecommendationNotFound;

export type StoneRecommendationNonSkuGemstone = {
  color: StoneColor;
  item: StoneRecommendationNonSkuGemstoneItem;
};

export type StoneRecommendationsResponse = StoneRecommendationsResponseSuccess | StoneRecommendationsResponseFailure;

export type StoneRecommendationsResponseFailure = {
  error?: Maybe<StoneRecommendationsResponseError>;
};

export type StoneRecommendationsResponseError =
  | 'MOUNT_MISSING';

export type StoneRecommendationsResponseSuccess = {
  priceBounds: StoneRecommendationsPriceRange;
  priceInitialValues: StoneRecommendationsPriceRange;
  naturalDiamondBestForBalanceFilters: StoneRecommendationsNaturalDiamondFilters;
  naturalDiamondBestForSizeFilters: StoneRecommendationsNaturalDiamondFilters;
  nonSkuLabGrownBestForPrice: StoneRecommendationNonSkuLabGrownItem;
  nonSkuLabGrownBestForSize: StoneRecommendationNonSkuLabGrownItem;
  nonSkuGemStones: Array<StoneRecommendationNonSkuGemstone>;
};

export type StoneRecommendationsPriceRange = {
  min: Money;
  max: Money;
};

export type StoneRecommendationsNaturalDiamondFilters = {
  region: Region;
  shape: StoneShape;
  minCaratWeight: Scalars['Decimal']['output'];
  maxCaratWeight: Scalars['Decimal']['output'];
  tablePercentRange?: Maybe<StoneRecommendationsPercentRange>;
  depthPercentRange?: Maybe<StoneRecommendationsPercentRange>;
  cuts: Array<StoneCut>;
  polishes: Array<StonePolish>;
  symmetries: Array<StoneSymmetry>;
  fluorescences: Array<StoneFluorescence>;
  clarities: Array<StoneClarity>;
  colors: Array<StoneColor>;
  priceMin: Money;
  priceMax: Money;
};


export type StoneRecommendationsNaturalDiamondFilterspriceMinArgs = {
  currency: CurrencyInput;
};


export type StoneRecommendationsNaturalDiamondFilterspriceMaxArgs = {
  currency: CurrencyInput;
};

export type StoneRecommendationsPercentRange = {
  min: Scalars['Int']['output'];
  max: Scalars['Int']['output'];
};

export type CatalogueDesignStudioEngagementRingValidationResult = {
  engagementRing?: Maybe<CatalogueEngagementRing>;
  centreStone?: Maybe<CatalogueDesignStudioEngagementRingCentreStone>;
  failure?: Maybe<DesignStudioEngagementRingFailure>;
};

export type CatalogueDesignStudioEngagementRingCentreStone = NonSkuGemstone | NonSkuLabGrown | GemsApiStone;

export type GemsApiStone = {
  identifier: Scalars['ID']['output'];
};

export type DesignStudioEngagementRingCentreStoneInput = {
  gemsApiIdentifier?: InputMaybe<Scalars['ID']['input']>;
  nonSkuLabGrownFilter?: InputMaybe<NonSkuLabGrownDiamondFilterInput>;
  nonSkuGemStoneFilter?: InputMaybe<NonSkuGemstoneFilterInput>;
};

export type DesignStudioEngagementRingError = DesignStudioEngagementRingErrorShapeMismatch | DesignStudioEngagementRingErrorMinCaratWeight | DesignStudioEngagementRingErrorMaxCaratWeight;

export type DesignStudioEngagementRingErrorShapeMismatch = {
  message: Scalars['String']['output'];
  matchingVariation?: Maybe<CatalogueEngagementRing>;
};


export type DesignStudioEngagementRingErrorShapeMismatchmessageArgs = {
  locale: Scalars['Locale']['input'];
};

export type DesignStudioEngagementRingErrorMinCaratWeight = {
  message: Scalars['String']['output'];
};


export type DesignStudioEngagementRingErrorMinCaratWeightmessageArgs = {
  locale: Scalars['Locale']['input'];
};

export type DesignStudioEngagementRingErrorMaxCaratWeight = {
  message: Scalars['String']['output'];
};


export type DesignStudioEngagementRingErrorMaxCaratWeightmessageArgs = {
  locale: Scalars['Locale']['input'];
};

export type DesignStudioEngagementRingFailure = {
  errors: Array<DesignStudioEngagementRingError>;
};

export type DesignStudioWeddingRingInput = {
  catalogueWeddingRingCode: Scalars['ID']['input'];
  ringSize: RingSizeInput;
  engraving?: InputMaybe<Scalars['String']['input']>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
  uri: Scalars['Uri']['input'];
  baseInput?: InputMaybe<EnquiryBaseInput>;
};

export type DesignStudioJewelleryInput = {
  catalogueJewelleryCode: Scalars['ID']['input'];
  engraving?: InputMaybe<Scalars['String']['input']>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
  uri: Scalars['Uri']['input'];
  baseInput?: InputMaybe<EnquiryBaseInput>;
};

export type UserCustomerEngagementRingRecommendations = {
  items: Array<CatalogueEngagementRing>;
  metal?: Maybe<Metal>;
  ringStyle?: Maybe<EngagementRingStyleLabel>;
  designStyle?: Maybe<EngagementRingDesignStyleLabel>;
  designFeature?: Maybe<EngagementRingDesignFeatureLabel>;
  shape?: Maybe<StoneShape>;
};


export type UserCustomerEngagementRingRecommendationsitemsArgs = {
  page?: Scalars['Int']['input'];
  limit?: Scalars['Int']['input'];
};

export type RingBuilderGetInput = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type RingBuilderResolvedNewCustomer = RingBuilderResolvedNewCustomerSuccess | RingBuilderResolvedFailure;

export type RingBuilderResolvedExistingCustomer = RingBuilderResolvedExistingCustomerSuccess | RingBuilderResolvedFailure;

export type RingBuilderResolveResult = CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart | CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio | DesignStudioEngagementRingFailure;

export type RingBuilderResolvedFailure = {
  errors: Array<RingBuilderResolvedFailureError>;
};

export type RingBuilderResolvedFailureError =
  | 'MOUNT_MISSING'
  | 'CENTRE_STONE_MISSING';

export type RingBuilderResolvedNewCustomerSuccess = {
  customer: CustomerRegistrationResponse;
  ringBuilder: RingBuilder;
  data: RingBuilderResolveResult;
};

export type RingBuilderResolvedExistingCustomerSuccess = {
  ringBuilder: RingBuilder;
  data: RingBuilderResolveResult;
};

export type RingBuilderResolveMode =
  | 'ENQUIRY'
  | 'ADD_TO_CART'
  | 'CUSTOMIZE';

export type RingBuilderResolveInput = {
  /** THIS WILL BECOME REQUIRED */
  getInput?: InputMaybe<RingBuilderGetInput>;
  mode: RingBuilderResolveMode;
  ringSize: RingSizeInput;
  engraving?: InputMaybe<Scalars['String']['input']>;
  commissionJunction?: InputMaybe<CommissionJunctionInput>;
  region: RegionCode;
  uri: Scalars['Uri']['input'];
  centreStoneUri: Scalars['Uri']['input'];
  currency: CurrencyInput;
  baseInput?: InputMaybe<EnquiryBaseInput>;
};

export type RingBuilderInput = {
  /** THIS WILL BECOME REQUIRED */
  getInput?: InputMaybe<RingBuilderGetInput>;
  mount?: InputMaybe<RingBuilderMountFragmentInput>;
  centreStone?: InputMaybe<RingBuilderCentreStoneFragmentInput>;
};

export type RingBuilderMountFragmentInput = {
  engagementRing?: InputMaybe<CatalogueEngagementRingFilterInput>;
  signatureStone?: InputMaybe<CatalogueEngagementRingSignatureStoneInput>;
};

export type RingBuilderCentreStoneFragmentInput = {
  nonSkuLabGrownDiamond?: InputMaybe<NonSkuLabGrownDiamondFilterInput>;
  nonSkuGemstone?: InputMaybe<NonSkuGemstoneFilterInput>;
  gemsApiIdentifier?: InputMaybe<Scalars['ID']['input']>;
};

export type RingBuilder = {
  id: Scalars['ID']['output'];
  position1?: Maybe<RingBuilderFragment>;
  position2?: Maybe<RingBuilderFragment>;
  totalSalePrice: Money;
  failure?: Maybe<DesignStudioEngagementRingFailure>;
  financeOptionsAffirm?: Maybe<AffirmFinanceOption>;
  financeOptionsKlarna?: Maybe<KlarnaFinanceOption>;
  stoneRecommendations: StoneRecommendationsResponse;
};


export type RingBuildertotalSalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type RingBuilderfinanceOptionsAffirmArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type RingBuilderfinanceOptionsKlarnaArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};


export type RingBuilderstoneRecommendationsArgs = {
  region: RegionCode;
  currency: CurrencyInput;
  minPrice?: InputMaybe<MoneyInput>;
  maxPrice?: InputMaybe<MoneyInput>;
};

export type RingBuilderFragment = RingBuilderMountFragment | RingBuilderCentreStoneFragment;

export type RingBuilderMountFragment = {
  ring?: Maybe<CatalogueEngagementRing>;
  signatureStone?: Maybe<CatalogueEngagementRingSignatureStone>;
  totalSalePrice: Money;
};


export type RingBuilderMountFragmenttotalSalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type RingBuilderCentreStoneFragment = {
  stone?: Maybe<RingBuilderCentreStone>;
  totalSalePrice: Money;
};


export type RingBuilderCentreStoneFragmenttotalSalePriceArgs = {
  region: RegionCode;
  currency: CurrencyInput;
};

export type RingBuilderCentreStone = NonSkuGemstone | NonSkuLabGrown | GemsApiStone;

export type MarketingDataResponse = {
  success: Scalars['Boolean']['output'];
};

export type MarketingDataInput = {
  ftUtm: UtmInput;
  ltUtm: UtmInput;
  clientId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  fbp?: InputMaybe<Scalars['String']['input']>;
  fbclid?: InputMaybe<Scalars['String']['input']>;
  ftSetTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UtmInput = {
  source: Scalars['String']['input'];
  medium: Scalars['String']['input'];
  campaign?: InputMaybe<Scalars['String']['input']>;
};

export type SearchEverywhereResponse = {
  products: Array<DesignStudioProductGeneric>;
  customers: Array<Customer>;
  orders: Array<Order>;
};

  export type QuerySdk = {
      /** null **/
  ping: InContextSdkMethod<Query['ping'], {}, MeshContext>,
  /** null **/
  bookingConsultationPurposes: InContextSdkMethod<Query['bookingConsultationPurposes'], {}, MeshContext>,
  /** null **/
  bookingConsultationComplexities: InContextSdkMethod<Query['bookingConsultationComplexities'], {}, MeshContext>,
  /** null **/
  bookingConsultationAvailableSlots: InContextSdkMethod<Query['bookingConsultationAvailableSlots'], QuerybookingConsultationAvailableSlotsArgs, MeshContext>,
  /** If this returns true: prompt user for phone **/
  bookingConsultationShowPhone: InContextSdkMethod<Query['bookingConsultationShowPhone'], {}, MeshContext>,
  /** null **/
  validateConsultationInput: InContextSdkMethod<Query['validateConsultationInput'], QueryvalidateConsultationInputArgs, MeshContext>,
  /** null **/
  bookingConsultation: InContextSdkMethod<Query['bookingConsultation'], QuerybookingConsultationArgs, MeshContext>,
  /** null **/
  bookingConsultants: InContextSdkMethod<Query['bookingConsultants'], {}, MeshContext>,
  /** null **/
  bookingShowrooms: InContextSdkMethod<Query['bookingShowrooms'], {}, MeshContext>,
  /** null **/
  bookingCustomer: InContextSdkMethod<Query['bookingCustomer'], QuerybookingCustomerArgs, MeshContext>,
  /** null **/
  bookingAvailableTransitions: InContextSdkMethod<Query['bookingAvailableTransitions'], QuerybookingAvailableTransitionsArgs, MeshContext>,
  /** null **/
  bookingInPersonConsultationRooms: InContextSdkMethod<Query['bookingInPersonConsultationRooms'], QuerybookingInPersonConsultationRoomsArgs, MeshContext>,
  /** null **/
  bookingVirtualConsultationRooms: InContextSdkMethod<Query['bookingVirtualConsultationRooms'], QuerybookingVirtualConsultationRoomsArgs, MeshContext>,
  /** null **/
  bookingConsultationAvailableSlotsByConsultant: InContextSdkMethod<Query['bookingConsultationAvailableSlotsByConsultant'], QuerybookingConsultationAvailableSlotsByConsultantArgs, MeshContext>,
  /** null **/
  catalogueProducts: InContextSdkMethod<Query['catalogueProducts'], QuerycatalogueProductsArgs, MeshContext>,
  /** null **/
  catalogueEngagementRings: InContextSdkMethod<Query['catalogueEngagementRings'], QuerycatalogueEngagementRingsArgs, MeshContext>,
  /** null **/
  catalogueEngagementRing: InContextSdkMethod<Query['catalogueEngagementRing'], QuerycatalogueEngagementRingArgs, MeshContext>,
  /** null **/
  catalogueEngagementRingsAggregate: InContextSdkMethod<Query['catalogueEngagementRingsAggregate'], QuerycatalogueEngagementRingsAggregateArgs, MeshContext>,
  /** null **/
  catalogueEngagementRingFilters: InContextSdkMethod<Query['catalogueEngagementRingFilters'], QuerycatalogueEngagementRingFiltersArgs, MeshContext>,
  /** null **/
  catalogueEngagementRingFiltersVariations: InContextSdkMethod<Query['catalogueEngagementRingFiltersVariations'], {}, MeshContext>,
  /** null **/
  catalogueEngagementRingContainsProducts: InContextSdkMethod<Query['catalogueEngagementRingContainsProducts'], QuerycatalogueEngagementRingContainsProductsArgs, MeshContext>,
  /** null **/
  catalogueWeddingRings: InContextSdkMethod<Query['catalogueWeddingRings'], QuerycatalogueWeddingRingsArgs, MeshContext>,
  /** null **/
  catalogueWeddingRingsAggregate: InContextSdkMethod<Query['catalogueWeddingRingsAggregate'], QuerycatalogueWeddingRingsAggregateArgs, MeshContext>,
  /** null **/
  catalogueWeddingRingFilters: InContextSdkMethod<Query['catalogueWeddingRingFilters'], QuerycatalogueWeddingRingFiltersArgs, MeshContext>,
  /** null **/
  catalogueWeddingRingFilterVariations: InContextSdkMethod<Query['catalogueWeddingRingFilterVariations'], {}, MeshContext>,
  /** null **/
  catalogueReadyToGoRings: InContextSdkMethod<Query['catalogueReadyToGoRings'], QuerycatalogueReadyToGoRingsArgs, MeshContext>,
  /** null **/
  catalogueReadyToGoRing: InContextSdkMethod<Query['catalogueReadyToGoRing'], QuerycatalogueReadyToGoRingArgs, MeshContext>,
  /** null **/
  catalogueReadyToGoRingsAggregate: InContextSdkMethod<Query['catalogueReadyToGoRingsAggregate'], QuerycatalogueReadyToGoRingsAggregateArgs, MeshContext>,
  /** null **/
  catalogueReadyToGoRingsFilters: InContextSdkMethod<Query['catalogueReadyToGoRingsFilters'], QuerycatalogueReadyToGoRingsFiltersArgs, MeshContext>,
  /** null **/
  catalogueJewelleries: InContextSdkMethod<Query['catalogueJewelleries'], QuerycatalogueJewelleriesArgs, MeshContext>,
  /** null **/
  catalogueJewellery: InContextSdkMethod<Query['catalogueJewellery'], QuerycatalogueJewelleryArgs, MeshContext>,
  /** null **/
  catalogueJewelleriesFilters: InContextSdkMethod<Query['catalogueJewelleriesFilters'], QuerycatalogueJewelleriesFiltersArgs, MeshContext>,
  /** null **/
  catalogueJewelleriesFiltersVariations: InContextSdkMethod<Query['catalogueJewelleriesFiltersVariations'], {}, MeshContext>,
  /** null **/
  catalogueJewelleriesAggregate: InContextSdkMethod<Query['catalogueJewelleriesAggregate'], QuerycatalogueJewelleriesAggregateArgs, MeshContext>,
  /** null **/
  catalogueJewelleryNecklaces: InContextSdkMethod<Query['catalogueJewelleryNecklaces'], QuerycatalogueJewelleryNecklacesArgs, MeshContext>,
  /** null **/
  catalogueJewelleryNecklace: InContextSdkMethod<Query['catalogueJewelleryNecklace'], QuerycatalogueJewelleryNecklaceArgs, MeshContext>,
  /** null **/
  catalogueJewelleryNecklacesFilters: InContextSdkMethod<Query['catalogueJewelleryNecklacesFilters'], QuerycatalogueJewelleryNecklacesFiltersArgs, MeshContext>,
  /** null **/
  catalogueJewelleryNecklacesFiltersVariations: InContextSdkMethod<Query['catalogueJewelleryNecklacesFiltersVariations'], {}, MeshContext>,
  /** null **/
  catalogueJewelleryNecklacesAggregate: InContextSdkMethod<Query['catalogueJewelleryNecklacesAggregate'], QuerycatalogueJewelleryNecklacesAggregateArgs, MeshContext>,
  /** null **/
  catalogueJewelleryEarrings: InContextSdkMethod<Query['catalogueJewelleryEarrings'], QuerycatalogueJewelleryEarringsArgs, MeshContext>,
  /** null **/
  catalogueJewelleryEarring: InContextSdkMethod<Query['catalogueJewelleryEarring'], QuerycatalogueJewelleryEarringArgs, MeshContext>,
  /** null **/
  catalogueJewelleryEarringsFilters: InContextSdkMethod<Query['catalogueJewelleryEarringsFilters'], QuerycatalogueJewelleryEarringsFiltersArgs, MeshContext>,
  /** null **/
  catalogueJewelleryEarringsFiltersVariations: InContextSdkMethod<Query['catalogueJewelleryEarringsFiltersVariations'], {}, MeshContext>,
  /** null **/
  catalogueJewelleryEarringsAggregate: InContextSdkMethod<Query['catalogueJewelleryEarringsAggregate'], QuerycatalogueJewelleryEarringsAggregateArgs, MeshContext>,
  /** null **/
  catalogueJewelleryBracelets: InContextSdkMethod<Query['catalogueJewelleryBracelets'], QuerycatalogueJewelleryBraceletsArgs, MeshContext>,
  /** null **/
  catalogueJewelleryBracelet: InContextSdkMethod<Query['catalogueJewelleryBracelet'], QuerycatalogueJewelleryBraceletArgs, MeshContext>,
  /** null **/
  catalogueJewelleryBraceletsFilters: InContextSdkMethod<Query['catalogueJewelleryBraceletsFilters'], QuerycatalogueJewelleryBraceletsFiltersArgs, MeshContext>,
  /** null **/
  catalogueJewelleryBraceletFiltersVariations: InContextSdkMethod<Query['catalogueJewelleryBraceletFiltersVariations'], {}, MeshContext>,
  /** null **/
  catalogueJewelleryBraceletsAggregate: InContextSdkMethod<Query['catalogueJewelleryBraceletsAggregate'], QuerycatalogueJewelleryBraceletsAggregateArgs, MeshContext>,
  /** null **/
  defaultRegion: InContextSdkMethod<Query['defaultRegion'], {}, MeshContext>,
  /** null **/
  defaultAlternateRegion: InContextSdkMethod<Query['defaultAlternateRegion'], {}, MeshContext>,
  /** null **/
  regions: InContextSdkMethod<Query['regions'], {}, MeshContext>,
  /** null **/
  region: InContextSdkMethod<Query['region'], QueryregionArgs, MeshContext>,
  /** null **/
  regionSuggest: InContextSdkMethod<Query['regionSuggest'], {}, MeshContext>,
  /** null **/
  deliveryDaysForBespokeEngagementRings: InContextSdkMethod<Query['deliveryDaysForBespokeEngagementRings'], {}, MeshContext>,
  /** null **/
  metals: InContextSdkMethod<Query['metals'], {}, MeshContext>,
  /** null **/
  convertMoney: InContextSdkMethod<Query['convertMoney'], QueryconvertMoneyArgs, MeshContext>,
  /** null **/
  stoneClarityBySystemCode: InContextSdkMethod<Query['stoneClarityBySystemCode'], QuerystoneClarityBySystemCodeArgs, MeshContext>,
  /** null **/
  stoneClaritiesBySystemCode: InContextSdkMethod<Query['stoneClaritiesBySystemCode'], QuerystoneClaritiesBySystemCodeArgs, MeshContext>,
  /** null **/
  stoneColorBySystemCode: InContextSdkMethod<Query['stoneColorBySystemCode'], QuerystoneColorBySystemCodeArgs, MeshContext>,
  /** null **/
  stoneColorsBySystemCode: InContextSdkMethod<Query['stoneColorsBySystemCode'], QuerystoneColorsBySystemCodeArgs, MeshContext>,
  /** null **/
  stoneCategoryBySystemCode: InContextSdkMethod<Query['stoneCategoryBySystemCode'], QuerystoneCategoryBySystemCodeArgs, MeshContext>,
  /** null **/
  stoneCategoriesBySystemCode: InContextSdkMethod<Query['stoneCategoriesBySystemCode'], QuerystoneCategoriesBySystemCodeArgs, MeshContext>,
  /** null **/
  stoneShapeBySystemCodes: InContextSdkMethod<Query['stoneShapeBySystemCodes'], QuerystoneShapeBySystemCodesArgs, MeshContext>,
  /** null **/
  stoneCutsBySystemCodes: InContextSdkMethod<Query['stoneCutsBySystemCodes'], QuerystoneCutsBySystemCodesArgs, MeshContext>,
  /** null **/
  stoneGradesBySystemCodes: InContextSdkMethod<Query['stoneGradesBySystemCodes'], QuerystoneGradesBySystemCodesArgs, MeshContext>,
  /** null **/
  stoneFluorescencesBySystemCodes: InContextSdkMethod<Query['stoneFluorescencesBySystemCodes'], QuerystoneFluorescencesBySystemCodesArgs, MeshContext>,
  /** null **/
  stonePolishesBySystemCodes: InContextSdkMethod<Query['stonePolishesBySystemCodes'], QuerystonePolishesBySystemCodesArgs, MeshContext>,
  /** null **/
  stoneSymmetriesBySystemCodes: InContextSdkMethod<Query['stoneSymmetriesBySystemCodes'], QuerystoneSymmetriesBySystemCodesArgs, MeshContext>,
  /** null **/
  stoneColors: InContextSdkMethod<Query['stoneColors'], QuerystoneColorsArgs, MeshContext>,
  /** null **/
  stoneClarities: InContextSdkMethod<Query['stoneClarities'], QuerystoneClaritiesArgs, MeshContext>,
  /** null **/
  stoneShapes: InContextSdkMethod<Query['stoneShapes'], QuerystoneShapesArgs, MeshContext>,
  /** null **/
  stoneGrades: InContextSdkMethod<Query['stoneGrades'], QuerystoneGradesArgs, MeshContext>,
  /** null **/
  stoneCrystals: InContextSdkMethod<Query['stoneCrystals'], QuerystoneCrystalsArgs, MeshContext>,
  /** null **/
  languages: InContextSdkMethod<Query['languages'], {}, MeshContext>,
  /** null **/
  language: InContextSdkMethod<Query['language'], QuerylanguageArgs, MeshContext>,
  /** null **/
  customerExists: InContextSdkMethod<Query['customerExists'], QuerycustomerExistsArgs, MeshContext>,
  /** null **/
  validateCustomerRegistrationInput: InContextSdkMethod<Query['validateCustomerRegistrationInput'], QueryvalidateCustomerRegistrationInputArgs, MeshContext>,
  /** null **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** null **/
  convertPriceBoundsForGems: InContextSdkMethod<Query['convertPriceBoundsForGems'], QueryconvertPriceBoundsForGemsArgs, MeshContext>,
  /** null **/
  convertPriceBoundsForGemsMulti: InContextSdkMethod<Query['convertPriceBoundsForGemsMulti'], QueryconvertPriceBoundsForGemsMultiArgs, MeshContext>,
  /** null **/
  calculateGemsApiStoneTotalSalePrices: InContextSdkMethod<Query['calculateGemsApiStoneTotalSalePrices'], QuerycalculateGemsApiStoneTotalSalePricesArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamonds: InContextSdkMethod<Query['nonSkuLabGrownDiamonds'], QuerynonSkuLabGrownDiamondsArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamondsBounds: InContextSdkMethod<Query['nonSkuLabGrownDiamondsBounds'], {}, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamond: InContextSdkMethod<Query['nonSkuLabGrownDiamond'], QuerynonSkuLabGrownDiamondArgs, MeshContext>,
  /** null **/
  nonSkuGemStones: InContextSdkMethod<Query['nonSkuGemStones'], QuerynonSkuGemStonesArgs, MeshContext>,
  /** null **/
  nonSkuGemStonesBounds: InContextSdkMethod<Query['nonSkuGemStonesBounds'], {}, MeshContext>,
  /** null **/
  nonSkuGemStone: InContextSdkMethod<Query['nonSkuGemStone'], QuerynonSkuGemStoneArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownPricingCells: InContextSdkMethod<Query['nonSkuLabGrownPricingCells'], QuerynonSkuLabGrownPricingCellsArgs, MeshContext>,
  /** null **/
  nonSkuGemStonesPricingCells: InContextSdkMethod<Query['nonSkuGemStonesPricingCells'], QuerynonSkuGemStonesPricingCellsArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownShapeDimensions: InContextSdkMethod<Query['nonSkuLabGrownShapeDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuLabGrownCaratDimensions: InContextSdkMethod<Query['nonSkuLabGrownCaratDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuLabGrownGradeDimensions: InContextSdkMethod<Query['nonSkuLabGrownGradeDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuGemstoneShapeDimensions: InContextSdkMethod<Query['nonSkuGemstoneShapeDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuGemstoneGradeClarityDimensions: InContextSdkMethod<Query['nonSkuGemstoneGradeClarityDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuGemstoneColorCrystalDimensions: InContextSdkMethod<Query['nonSkuGemstoneColorCrystalDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuGemstoneCaratDimensions: InContextSdkMethod<Query['nonSkuGemstoneCaratDimensions'], {}, MeshContext>,
  /** null **/
  nonSkuGemstoneImages: InContextSdkMethod<Query['nonSkuGemstoneImages'], {}, MeshContext>,
  /** null **/
  ringBuilder: InContextSdkMethod<Query['ringBuilder'], QueryringBuilderArgs, MeshContext>,
  /** null **/
  searchEverywhere: InContextSdkMethod<Query['searchEverywhere'], QuerysearchEverywhereArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  ping: InContextSdkMethod<Mutation['ping'], {}, MeshContext>,
  /** For not-logged user **/
  createConsultationNewCustomer: InContextSdkMethod<Mutation['createConsultationNewCustomer'], MutationcreateConsultationNewCustomerArgs, MeshContext>,
  /** For logged user **/
  createConsultationExistingCustomer: InContextSdkMethod<Mutation['createConsultationExistingCustomer'], MutationcreateConsultationExistingCustomerArgs, MeshContext>,
  /** null **/
  cancelConsultation: InContextSdkMethod<Mutation['cancelConsultation'], MutationcancelConsultationArgs, MeshContext>,
  /** null **/
  createConsultationByConsultant: InContextSdkMethod<Mutation['createConsultationByConsultant'], MutationcreateConsultationByConsultantArgs, MeshContext>,
  /** null **/
  updateConsultationByConsultant: InContextSdkMethod<Mutation['updateConsultationByConsultant'], MutationupdateConsultationByConsultantArgs, MeshContext>,
  /** null **/
  applyTransitionToConsultationByConsultant: InContextSdkMethod<Mutation['applyTransitionToConsultationByConsultant'], MutationapplyTransitionToConsultationByConsultantArgs, MeshContext>,
  /** null **/
  removeFromMyCart: InContextSdkMethod<Mutation['removeFromMyCart'], MutationremoveFromMyCartArgs, MeshContext>,
  /** null **/
  setOrderCollectFromShowroomInformation: InContextSdkMethod<Mutation['setOrderCollectFromShowroomInformation'], MutationsetOrderCollectFromShowroomInformationArgs, MeshContext>,
  /** null **/
  setOrderDeliverToAddressInformation: InContextSdkMethod<Mutation['setOrderDeliverToAddressInformation'], MutationsetOrderDeliverToAddressInformationArgs, MeshContext>,
  /** null **/
  payViaNoPayment: InContextSdkMethod<Mutation['payViaNoPayment'], MutationpayViaNoPaymentArgs, MeshContext>,
  /** null **/
  createAffirmTransaction: InContextSdkMethod<Mutation['createAffirmTransaction'], MutationcreateAffirmTransactionArgs, MeshContext>,
  /** null **/
  payViaAffirm: InContextSdkMethod<Mutation['payViaAffirm'], MutationpayViaAffirmArgs, MeshContext>,
  /** null **/
  completeAffirmTransactionPostIframe: InContextSdkMethod<Mutation['completeAffirmTransactionPostIframe'], MutationcompleteAffirmTransactionPostIframeArgs, MeshContext>,
  /** null **/
  createAllocationTransaction: InContextSdkMethod<Mutation['createAllocationTransaction'], MutationcreateAllocationTransactionArgs, MeshContext>,
  /** null **/
  payViaAllocation: InContextSdkMethod<Mutation['payViaAllocation'], MutationpayViaAllocationArgs, MeshContext>,
  /** null **/
  createBankTransaction: InContextSdkMethod<Mutation['createBankTransaction'], MutationcreateBankTransactionArgs, MeshContext>,
  /** null **/
  payViaBank: InContextSdkMethod<Mutation['payViaBank'], MutationpayViaBankArgs, MeshContext>,
  /** null **/
  createCheckoutcomTransaction: InContextSdkMethod<Mutation['createCheckoutcomTransaction'], MutationcreateCheckoutcomTransactionArgs, MeshContext>,
  /** null **/
  payViaCheckoutcom: InContextSdkMethod<Mutation['payViaCheckoutcom'], MutationpayViaCheckoutcomArgs, MeshContext>,
  /** null **/
  completeCheckoutcomTransactionPost3ds: InContextSdkMethod<Mutation['completeCheckoutcomTransactionPost3ds'], MutationcompleteCheckoutcomTransactionPost3dsArgs, MeshContext>,
  /** null **/
  createKlarnaTransaction: InContextSdkMethod<Mutation['createKlarnaTransaction'], MutationcreateKlarnaTransactionArgs, MeshContext>,
  /** null **/
  payViaKlarna: InContextSdkMethod<Mutation['payViaKlarna'], MutationpayViaKlarnaArgs, MeshContext>,
  /** null **/
  applyPromoCode: InContextSdkMethod<Mutation['applyPromoCode'], MutationapplyPromoCodeArgs, MeshContext>,
  /** null **/
  questionnaireCompleteExistingCustomer: InContextSdkMethod<Mutation['questionnaireCompleteExistingCustomer'], MutationquestionnaireCompleteExistingCustomerArgs, MeshContext>,
  /** null **/
  questionnaireCompleteNewCustomer: InContextSdkMethod<Mutation['questionnaireCompleteNewCustomer'], MutationquestionnaireCompleteNewCustomerArgs, MeshContext>,
  /** null **/
  magicLinkRequest: InContextSdkMethod<Mutation['magicLinkRequest'], MutationmagicLinkRequestArgs, MeshContext>,
  /** null **/
  magicLinkConsume: InContextSdkMethod<Mutation['magicLinkConsume'], MutationmagicLinkConsumeArgs, MeshContext>,
  /** null **/
  createDesignInspiration: InContextSdkMethod<Mutation['createDesignInspiration'], MutationcreateDesignInspirationArgs, MeshContext>,
  /** null **/
  loginWithGoogle: InContextSdkMethod<Mutation['loginWithGoogle'], MutationloginWithGoogleArgs, MeshContext>,
  /** null **/
  login: InContextSdkMethod<Mutation['login'], MutationloginArgs, MeshContext>,
  /** null **/
  autologin: InContextSdkMethod<Mutation['autologin'], MutationautologinArgs, MeshContext>,
  /** null **/
  logout: InContextSdkMethod<Mutation['logout'], {}, MeshContext>,
  /** null **/
  refreshToken: InContextSdkMethod<Mutation['refreshToken'], MutationrefreshTokenArgs, MeshContext>,
  /** null **/
  impersonate: InContextSdkMethod<Mutation['impersonate'], MutationimpersonateArgs, MeshContext>,
  /** null **/
  createEnquiryExistingCustomer: InContextSdkMethod<Mutation['createEnquiryExistingCustomer'], MutationcreateEnquiryExistingCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryNewCustomer: InContextSdkMethod<Mutation['createEnquiryNewCustomer'], MutationcreateEnquiryNewCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryContactUsExistingCustomer: InContextSdkMethod<Mutation['createEnquiryContactUsExistingCustomer'], MutationcreateEnquiryContactUsExistingCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryContactUsNewCustomer: InContextSdkMethod<Mutation['createEnquiryContactUsNewCustomer'], MutationcreateEnquiryContactUsNewCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryCustomEngagementRingExistingCustomer: InContextSdkMethod<Mutation['createEnquiryCustomEngagementRingExistingCustomer'], MutationcreateEnquiryCustomEngagementRingExistingCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryCustomEngagementRingNewCustomer: InContextSdkMethod<Mutation['createEnquiryCustomEngagementRingNewCustomer'], MutationcreateEnquiryCustomEngagementRingNewCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryEngagementRingPreferAnotherShapeExistingCustomer: InContextSdkMethod<Mutation['createEnquiryEngagementRingPreferAnotherShapeExistingCustomer'], MutationcreateEnquiryEngagementRingPreferAnotherShapeExistingCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryEngagementRingPreferAnotherShapeNewCustomer: InContextSdkMethod<Mutation['createEnquiryEngagementRingPreferAnotherShapeNewCustomer'], MutationcreateEnquiryEngagementRingPreferAnotherShapeNewCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryDiamondSearchProductExistingCustomer: InContextSdkMethod<Mutation['createEnquiryDiamondSearchProductExistingCustomer'], MutationcreateEnquiryDiamondSearchProductExistingCustomerArgs, MeshContext>,
  /** null **/
  createEnquiryDiamondSearchProductNewCustomer: InContextSdkMethod<Mutation['createEnquiryDiamondSearchProductNewCustomer'], MutationcreateEnquiryDiamondSearchProductNewCustomerArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownGradeDimensionDelete: InContextSdkMethod<Mutation['nonSkuLabGrownGradeDimensionDelete'], MutationnonSkuLabGrownGradeDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownGradeDimensionCreate: InContextSdkMethod<Mutation['nonSkuLabGrownGradeDimensionCreate'], MutationnonSkuLabGrownGradeDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownShapeDimensionDelete: InContextSdkMethod<Mutation['nonSkuLabGrownShapeDimensionDelete'], MutationnonSkuLabGrownShapeDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownShapeDimensionCreate: InContextSdkMethod<Mutation['nonSkuLabGrownShapeDimensionCreate'], MutationnonSkuLabGrownShapeDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownShapeDimensionUpdate: InContextSdkMethod<Mutation['nonSkuLabGrownShapeDimensionUpdate'], MutationnonSkuLabGrownShapeDimensionUpdateArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownCaratDimensionDelete: InContextSdkMethod<Mutation['nonSkuLabGrownCaratDimensionDelete'], MutationnonSkuLabGrownCaratDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownCaratDimensionCreate: InContextSdkMethod<Mutation['nonSkuLabGrownCaratDimensionCreate'], MutationnonSkuLabGrownCaratDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamondCreate: InContextSdkMethod<Mutation['nonSkuLabGrownDiamondCreate'], MutationnonSkuLabGrownDiamondCreateArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamondDelete: InContextSdkMethod<Mutation['nonSkuLabGrownDiamondDelete'], MutationnonSkuLabGrownDiamondDeleteArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamondDeleteImage: InContextSdkMethod<Mutation['nonSkuLabGrownDiamondDeleteImage'], MutationnonSkuLabGrownDiamondDeleteImageArgs, MeshContext>,
  /** null **/
  nonSkuLabGrownDiamondChangeImage: InContextSdkMethod<Mutation['nonSkuLabGrownDiamondChangeImage'], MutationnonSkuLabGrownDiamondChangeImageArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneShapeDimensionDelete: InContextSdkMethod<Mutation['nonSkuGemstoneShapeDimensionDelete'], MutationnonSkuGemstoneShapeDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneShapeDimensionCreate: InContextSdkMethod<Mutation['nonSkuGemstoneShapeDimensionCreate'], MutationnonSkuGemstoneShapeDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneGradeClarityDimensionDelete: InContextSdkMethod<Mutation['nonSkuGemstoneGradeClarityDimensionDelete'], MutationnonSkuGemstoneGradeClarityDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneGradeClarityDimensionCreate: InContextSdkMethod<Mutation['nonSkuGemstoneGradeClarityDimensionCreate'], MutationnonSkuGemstoneGradeClarityDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneColorCrystalDimensionDelete: InContextSdkMethod<Mutation['nonSkuGemstoneColorCrystalDimensionDelete'], MutationnonSkuGemstoneColorCrystalDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneColorCrystalDimensionCreate: InContextSdkMethod<Mutation['nonSkuGemstoneColorCrystalDimensionCreate'], MutationnonSkuGemstoneColorCrystalDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneCaratDimensionDelete: InContextSdkMethod<Mutation['nonSkuGemstoneCaratDimensionDelete'], MutationnonSkuGemstoneCaratDimensionDeleteArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneCaratDimensionCreate: InContextSdkMethod<Mutation['nonSkuGemstoneCaratDimensionCreate'], MutationnonSkuGemstoneCaratDimensionCreateArgs, MeshContext>,
  /** null **/
  nonSkuGemStoneCreate: InContextSdkMethod<Mutation['nonSkuGemStoneCreate'], MutationnonSkuGemStoneCreateArgs, MeshContext>,
  /** null **/
  nonSkuGemStoneDelete: InContextSdkMethod<Mutation['nonSkuGemStoneDelete'], MutationnonSkuGemStoneDeleteArgs, MeshContext>,
  /** null **/
  nonSkuGemStoneChangeImage: InContextSdkMethod<Mutation['nonSkuGemStoneChangeImage'], MutationnonSkuGemStoneChangeImageArgs, MeshContext>,
  /** null **/
  nonSkuGemStoneDeleteImage: InContextSdkMethod<Mutation['nonSkuGemStoneDeleteImage'], MutationnonSkuGemStoneDeleteImageArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneImageCreate: InContextSdkMethod<Mutation['nonSkuGemstoneImageCreate'], MutationnonSkuGemstoneImageCreateArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneImageUpdate: InContextSdkMethod<Mutation['nonSkuGemstoneImageUpdate'], MutationnonSkuGemstoneImageUpdateArgs, MeshContext>,
  /** null **/
  nonSkuGemstoneImageDelete: InContextSdkMethod<Mutation['nonSkuGemstoneImageDelete'], MutationnonSkuGemstoneImageDeleteArgs, MeshContext>,
  /** null **/
  designStudioProductEngagementRingUpdate: InContextSdkMethod<Mutation['designStudioProductEngagementRingUpdate'], MutationdesignStudioProductEngagementRingUpdateArgs, MeshContext>,
  /** null **/
  designStudioProductWeddingRingUpdate: InContextSdkMethod<Mutation['designStudioProductWeddingRingUpdate'], MutationdesignStudioProductWeddingRingUpdateArgs, MeshContext>,
  /** null **/
  designStudioQuotationEngagementRingUpdate: InContextSdkMethod<Mutation['designStudioQuotationEngagementRingUpdate'], MutationdesignStudioQuotationEngagementRingUpdateArgs, MeshContext>,
  /** null **/
  addDesignStudioProductToMyCart: InContextSdkMethod<Mutation['addDesignStudioProductToMyCart'], MutationaddDesignStudioProductToMyCartArgs, MeshContext>,
  /** null **/
  createDesignStudioProductAndAddToCartWeddingRingNewCustomer: InContextSdkMethod<Mutation['createDesignStudioProductAndAddToCartWeddingRingNewCustomer'], MutationcreateDesignStudioProductAndAddToCartWeddingRingNewCustomerArgs, MeshContext>,
  /** null **/
  createDesignStudioProductAndAddToCartWeddingRingExistingCustomer: InContextSdkMethod<Mutation['createDesignStudioProductAndAddToCartWeddingRingExistingCustomer'], MutationcreateDesignStudioProductAndAddToCartWeddingRingExistingCustomerArgs, MeshContext>,
  /** null **/
  createDesignStudioProductAndAddToCartJewelleryNewCustomer: InContextSdkMethod<Mutation['createDesignStudioProductAndAddToCartJewelleryNewCustomer'], MutationcreateDesignStudioProductAndAddToCartJewelleryNewCustomerArgs, MeshContext>,
  /** null **/
  createDesignStudioProductAndAddToCartJewelleryExistingCustomer: InContextSdkMethod<Mutation['createDesignStudioProductAndAddToCartJewelleryExistingCustomer'], MutationcreateDesignStudioProductAndAddToCartJewelleryExistingCustomerArgs, MeshContext>,
  /** null **/
  addToCartReadyToGoRingNewCustomer: InContextSdkMethod<Mutation['addToCartReadyToGoRingNewCustomer'], MutationaddToCartReadyToGoRingNewCustomerArgs, MeshContext>,
  /** null **/
  addToCartReadyToGoRingExistingCustomer: InContextSdkMethod<Mutation['addToCartReadyToGoRingExistingCustomer'], MutationaddToCartReadyToGoRingExistingCustomerArgs, MeshContext>,
  /** null **/
  ringBuilder: InContextSdkMethod<Mutation['ringBuilder'], MutationringBuilderArgs, MeshContext>,
  /** null **/
  ringBuilderResolveNewCustomer: InContextSdkMethod<Mutation['ringBuilderResolveNewCustomer'], MutationringBuilderResolveNewCustomerArgs, MeshContext>,
  /** null **/
  ringBuilderResolveExistingCustomer: InContextSdkMethod<Mutation['ringBuilderResolveExistingCustomer'], MutationringBuilderResolveExistingCustomerArgs, MeshContext>,
  /** null **/
  marketingData: InContextSdkMethod<Mutation['marketingData'], MutationmarketingDataArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Monolith"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
