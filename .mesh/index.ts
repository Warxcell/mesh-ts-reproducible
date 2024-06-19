// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { MonolithTypes } from './sources/Monolith/types';
import * as importedModule$0 from "./../.meshrc.js";
import * as importedModule$1 from "./sources/Monolith/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  RingSizeOrRecommendedRingSize: ( RingSize ) | ( RecommendedRingSize );
  BookingCreateConsultationNewCustomerResponse: ( BookingCreateConsultationSuccessNewCustomer ) | ( BookingCreateConsultationErrorNoAvailableConsultants );
  BookingCreateConsultationExistingCustomerResponse: ( BookingCreateConsultationSuccessExistingCustomer ) | ( BookingCreateConsultationErrorNoAvailableConsultants );
  SetDeliveryInformationResponse: ( SetDeliveryInformationSuccessResponse ) | ( Omit<SetDeliveryInformationFailureResponse, 'errors'> & { errors: Array<_RefType['SetDeliveryInformationError']> } );
  SetDeliveryInformationError: ( OrderAlreadyCompletedError );
  CreateCheckoutcomTransactionResponse: ( CreateCheckoutcomTransactionSuccessResponse ) | ( Omit<CreateCheckoutcomTransactionFailureResponse, 'errors'> & { errors: Array<_RefType['CreateCheckoutcomTransactionError']> } );
  CreateCheckoutcomTransactionError: ( OrderAlreadyCompletedError ) | ( PaymentAmountInvalidError ) | ( OrderAddressNotConfirmedError ) | ( DesiredDeliveryDateInvalidError ) | ( AvataxAddressInvalidError ) | ( OrderEmptyError ) | ( PaymentMethodNotAllowedError );
  PayViaCheckoutcomResponse: ( PayViaCheckoutcomSuccessResponse ) | ( Omit<PayViaCheckoutcomFailureResponse, 'errors'> & { errors: Array<_RefType['PayViaCheckoutcomError']> } );
  PayViaCheckoutcomError: ( OrderAlreadyCompletedError ) | ( PaymentAmountInvalidError ) | ( DesiredDeliveryDateInvalidError ) | ( CheckoutcomOperationDeclinedError );
  CompleteCheckoutcomTransactionPost3dsResponse: ( CompleteCheckoutcomTransactionPost3dsSuccessResponse ) | ( Omit<CompleteCheckoutcomTransactionPost3dsFailureResponse, 'errors'> & { errors: Array<_RefType['CompleteCheckoutcomTransactionPost3dsError']> } );
  CompleteCheckoutcomTransactionPost3dsError: ( OrderAlreadyCompletedError ) | ( PaymentAmountInvalidError ) | ( DesiredDeliveryDateInvalidError ) | ( CheckoutcomOperationDeclinedError );
  QuestionnaireQuestionChoiceOptionLayoutSnapshot: ( QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard ) | ( QuestionnaireQuestionChoiceOptionLayoutSnapshotImage ) | ( QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard ) | ( QuestionnaireQuestionChoiceOptionLayoutSnapshotText );
  MagicLinkConsumeResponse: ( MagicLinkConsumeSuccess ) | ( MagicLinkConsumeError );
  LoginResponse: ( LoginResponseSuccess ) | ( LoginResponseFailure );
  Enquiry: ( EnquiryConsultation ) | ( EnquiryWeddingRingAddToCart ) | ( EnquiryEngagementRingAddToCart );
  HistoricalNonSku: ( HistoricalNonSkuLabGrown ) | ( HistoricalNonSkuGemstone );
  DesignStudioSideStone: ( Omit<DesignStudioInternalSideStone, 'item'> & { item: _RefType['DesignStudioSideStoneItem'] } ) | ( DesignStudioExternalSideStone );
  DesignStudioSideStoneItem: ( Stone ) | ( Melee );
  DesignStudioCentreStone: ( Omit<DesignStudioInternalCentreStone, 'nonSku'> & { nonSku?: Maybe<_RefType['HistoricalNonSku']> } ) | ( DesignStudioExternalCentreStone );
  CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse: ( CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer );
  CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse: ( CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer );
  CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse: ( CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer );
  CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse: ( CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer );
  CatalogueDesignStudioCheckoutEngagementRingSuccess: ( CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart ) | ( CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio );
  AddToCartReadyToGoRingNewCustomerResponse: ( AddToCartReadyToGoRingSuccessNewCustomer );
  AddToCartReadyToGoRingExistingCustomerResponse: ( AddToCartReadyToGoRingSuccessExistingCustomer );
  StoneRecommendationNonSkuLabGrownItem: ( NonSkuLabGrown ) | ( StoneRecommendationNotFound );
  StoneRecommendationNonSkuGemstoneItem: ( NonSkuGemstone ) | ( StoneRecommendationNotFound );
  StoneRecommendationsResponse: ( Omit<StoneRecommendationsResponseSuccess, 'nonSkuLabGrownBestForPrice' | 'nonSkuLabGrownBestForSize'> & { nonSkuLabGrownBestForPrice: _RefType['StoneRecommendationNonSkuLabGrownItem'], nonSkuLabGrownBestForSize: _RefType['StoneRecommendationNonSkuLabGrownItem'] } ) | ( StoneRecommendationsResponseFailure );
  CatalogueDesignStudioEngagementRingCentreStone: ( NonSkuGemstone ) | ( NonSkuLabGrown ) | ( GemsApiStone );
  DesignStudioEngagementRingError: ( DesignStudioEngagementRingErrorShapeMismatch ) | ( DesignStudioEngagementRingErrorMinCaratWeight ) | ( DesignStudioEngagementRingErrorMaxCaratWeight );
  RingBuilderResolvedNewCustomer: ( Omit<RingBuilderResolvedNewCustomerSuccess, 'data'> & { data: _RefType['RingBuilderResolveResult'] } ) | ( RingBuilderResolvedFailure );
  RingBuilderResolvedExistingCustomer: ( Omit<RingBuilderResolvedExistingCustomerSuccess, 'data'> & { data: _RefType['RingBuilderResolveResult'] } ) | ( RingBuilderResolvedFailure );
  RingBuilderResolveResult: ( CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart ) | ( CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio ) | ( Omit<DesignStudioEngagementRingFailure, 'errors'> & { errors: Array<_RefType['DesignStudioEngagementRingError']> } );
  RingBuilderFragment: ( RingBuilderMountFragment ) | ( Omit<RingBuilderCentreStoneFragment, 'stone'> & { stone?: Maybe<_RefType['RingBuilderCentreStone']> } );
  RingBuilderCentreStone: ( NonSkuGemstone ) | ( NonSkuLabGrown ) | ( GemsApiStone );
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  BookingConsultationRoom: ( BookingInPersonConsultationRoom ) | ( BookingVirtualConsultationRoom );
  CatalogueJewellery: ( CatalogueJewelleryNecklace ) | ( CatalogueJewelleryEarrings ) | ( CatalogueJewelleryBracelet );
  CatalogueProduct: ( CatalogueJewelleryNecklace ) | ( CatalogueJewelleryEarrings ) | ( CatalogueJewelleryBracelet ) | ( CatalogueReadyToGoRing ) | ( Omit<CatalogueEngagementRing, 'sizes'> & { sizes: Array<_RefType['RingSizeOrRecommendedRingSize']> } ) | ( Omit<CatalogueWeddingRing, 'sizes'> & { sizes: Array<_RefType['RingSizeOrRecommendedRingSize']> } );
  TransactionInterface: ( LegacyTransaction ) | ( AffirmTransaction ) | ( AllocationTransaction ) | ( BankTransaction ) | ( CheckoutcomTransaction ) | ( KlarnaTransaction ) | ( StripeTransaction );
  QuestionnaireAnswer: ( QuestionnaireQuestionAnswerText ) | ( QuestionnaireQuestionAnswerSingleChoice ) | ( QuestionnaireQuestionAnswerMultiChoice ) | ( QuestionnaireQuestionAnswerNumber );
  NonSkuInterface: ( HistoricalNonSkuLabGrown ) | ( NonSkuLabGrown ) | ( HistoricalNonSkuGemstone ) | ( NonSkuGemstone );
  NonSkuLabGrownInterface: ( HistoricalNonSkuLabGrown ) | ( NonSkuLabGrown );
  NonSkuGemStoneInterface: ( HistoricalNonSkuGemstone ) | ( NonSkuGemstone );
  DesignStudioProduct: ( Omit<DesignStudioProductLooseStone, 'quotations' | 'finalQuotation'> & { quotations: Array<_RefType['Quotation']>, finalQuotation?: Maybe<_RefType['Quotation']> } ) | ( Omit<DesignStudioProductAdditionalResize, 'quotations' | 'finalQuotation'> & { quotations: Array<_RefType['Quotation']>, finalQuotation?: Maybe<_RefType['Quotation']> } ) | ( Omit<DesignStudioProductCustom, 'quotations' | 'finalQuotation'> & { quotations: Array<_RefType['Quotation']>, finalQuotation?: Maybe<_RefType['Quotation']> } ) | ( Omit<DesignStudioProductGeneric, 'quotations' | 'finalQuotation'> & { quotations: Array<_RefType['Quotation']>, finalQuotation?: Maybe<_RefType['Quotation']> } ) | ( Omit<DesignStudioProductEngagementRing, 'finalQuotation' | 'size' | 'availableSizes'> & { finalQuotation?: Maybe<_RefType['Quotation']>, size?: Maybe<_RefType['RingSizeOrRecommendedRingSize']>, availableSizes: Array<_RefType['RingSizeOrRecommendedRingSize']> } ) | ( Omit<DesignStudioProductWeddingRing, 'finalQuotation' | 'size' | 'availableSizes'> & { finalQuotation?: Maybe<_RefType['Quotation']>, size?: Maybe<_RefType['RingSizeOrRecommendedRingSize']>, availableSizes: Array<_RefType['RingSizeOrRecommendedRingSize']> } );
  Quotation: ( QuotationEngagementRing ) | ( QuotationWeddingRing );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  RecommendedRingSize: ResolverTypeWrapper<RecommendedRingSize>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  RingSize: ResolverTypeWrapper<RingSize>;
  RingSizeInput: RingSizeInput;
  RingSizeOrRecommendedRingSize: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RingSizeOrRecommendedRingSize']>;
  BookingConsultationPurposeCode: BookingConsultationPurposeCode;
  BookingConsultationPurpose: ResolverTypeWrapper<BookingConsultationPurpose>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  BookingConsultationTypeCode: BookingConsultationTypeCode;
  BookingConsultationType: ResolverTypeWrapper<BookingConsultationType>;
  BookingConsultationMethodCode: BookingConsultationMethodCode;
  BookingConsultationMethod: ResolverTypeWrapper<BookingConsultationMethod>;
  BookingConsultationComplexityCode: BookingConsultationComplexityCode;
  BookingConsultationComplexity: ResolverTypeWrapper<BookingConsultationComplexity>;
  BookingConsultationComplexityTranslation: ResolverTypeWrapper<BookingConsultationComplexityTranslation>;
  BookingCancelConsultationInput: BookingCancelConsultationInput;
  BookingConsultationSlotsResponse: ResolverTypeWrapper<BookingConsultationSlotsResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  BookingConsultationSlot: ResolverTypeWrapper<BookingConsultationSlot>;
  BookingConsultationSlotInput: BookingConsultationSlotInput;
  BookingCreateConsultationNewCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['BookingCreateConsultationNewCustomerResponse']>;
  BookingCreateConsultationExistingCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['BookingCreateConsultationExistingCustomerResponse']>;
  BookingCreateConsultationSuccessNewCustomer: ResolverTypeWrapper<BookingCreateConsultationSuccessNewCustomer>;
  BookingCreateConsultationSuccessExistingCustomer: ResolverTypeWrapper<BookingCreateConsultationSuccessExistingCustomer>;
  BookingCreateConsultationErrorNoAvailableConsultants: ResolverTypeWrapper<BookingCreateConsultationErrorNoAvailableConsultants>;
  BookingSystemConsultant: BookingSystemConsultant;
  BookingCreateConsultationInput: BookingCreateConsultationInput;
  BookingCreateConsultationSalesConsultationInput: BookingCreateConsultationSalesConsultationInput;
  BookingCreateConsultationAftercareConsultationInput: BookingCreateConsultationAftercareConsultationInput;
  BookingConsultation: ResolverTypeWrapper<Omit<BookingConsultation, 'consultationRoom'> & { consultationRoom?: Maybe<ResolversTypes['BookingConsultationRoom']> }>;
  BookingConsultationRoomKind: BookingConsultationRoomKind;
  BookingConsultationRoom: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BookingConsultationRoom']>;
  BookingInPersonConsultationRoom: ResolverTypeWrapper<BookingInPersonConsultationRoom>;
  BookingVirtualConsultationRoom: ResolverTypeWrapper<BookingVirtualConsultationRoom>;
  BookingConsultationState: BookingConsultationState;
  BookingConsultationTransition: BookingConsultationTransition;
  BookingConsultationMutableFields: BookingConsultationMutableFields;
  BookingConsultationAvailableDate: ResolverTypeWrapper<BookingConsultationAvailableDate>;
  BookingConsultationAvailableShowroom: ResolverTypeWrapper<BookingConsultationAvailableShowroom>;
  CatalogueImage: ResolverTypeWrapper<CatalogueImage>;
  CatalogueJewellery: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CatalogueJewellery']>;
  CatalogueAggregate: ResolverTypeWrapper<CatalogueAggregate>;
  CatalogueJewelleriesFilters: ResolverTypeWrapper<CatalogueJewelleriesFilters>;
  CatalogueJewelleriesFiltersVariation: ResolverTypeWrapper<CatalogueJewelleriesFiltersVariation>;
  CatalogueJewelleriesNecklacesFiltersVariation: ResolverTypeWrapper<CatalogueJewelleriesNecklacesFiltersVariation>;
  CatalogueJewelleriesEarringsFiltersVariation: ResolverTypeWrapper<CatalogueJewelleriesEarringsFiltersVariation>;
  CatalogueJewelleriesBraceletsFiltersVariation: ResolverTypeWrapper<CatalogueJewelleriesBraceletsFiltersVariation>;
  CatalogueJewelleryNecklacesFilters: ResolverTypeWrapper<CatalogueJewelleryNecklacesFilters>;
  CatalogueJewelleryBraceletsFilters: ResolverTypeWrapper<CatalogueJewelleryBraceletsFilters>;
  CatalogueJewelleryEarringsFilters: ResolverTypeWrapper<CatalogueJewelleryEarringsFilters>;
  CatalogueFilterJewelleryDesignStyleLabel: ResolverTypeWrapper<CatalogueFilterJewelleryDesignStyleLabel>;
  CatalogueFilterJewelleryDesignFeatureLabel: ResolverTypeWrapper<CatalogueFilterJewelleryDesignFeatureLabel>;
  CatalogueFilterJewelleryGemstoneLabel: ResolverTypeWrapper<CatalogueFilterJewelleryGemstoneLabel>;
  CatalogueFilterJewelleryNecklaceProductStyleLabel: ResolverTypeWrapper<CatalogueFilterJewelleryNecklaceProductStyleLabel>;
  CatalogueFilterJewelleryBraceletProductStyleLabel: ResolverTypeWrapper<CatalogueFilterJewelleryBraceletProductStyleLabel>;
  CatalogueFilterJewelleryEarringsProductStyleLabel: ResolverTypeWrapper<CatalogueFilterJewelleryEarringsProductStyleLabel>;
  CatalogueJewelleriesFilterInput: CatalogueJewelleriesFilterInput;
  CatalogueJewelleryFilterInput: CatalogueJewelleryFilterInput;
  CatalogueJewelleriesNecklacesFilterInput: CatalogueJewelleriesNecklacesFilterInput;
  CatalogueJewelleriesEarringsFilterInput: CatalogueJewelleriesEarringsFilterInput;
  CatalogueJewelleriesBraceletsFilterInput: CatalogueJewelleriesBraceletsFilterInput;
  CatalogueJewelleryNecklace: ResolverTypeWrapper<CatalogueJewelleryNecklace>;
  CatalogueJewelleryNecklaceTranslation: ResolverTypeWrapper<CatalogueJewelleryNecklaceTranslation>;
  CatalogueJewelleryEarrings: ResolverTypeWrapper<CatalogueJewelleryEarrings>;
  CatalogueJewelleryEarringsTranslation: ResolverTypeWrapper<CatalogueJewelleryEarringsTranslation>;
  CatalogueJewelleryBracelet: ResolverTypeWrapper<CatalogueJewelleryBracelet>;
  CatalogueJewelleryBraceletTranslation: ResolverTypeWrapper<CatalogueJewelleryBraceletTranslation>;
  CatalogueEngagementRingFilterInput: CatalogueEngagementRingFilterInput;
  CatalogueEngagementRingContainsProductsInput: CatalogueEngagementRingContainsProductsInput;
  CatalogueSortInput: CatalogueSortInput;
  CatalogueReadyToGoRingFilterInput: CatalogueReadyToGoRingFilterInput;
  CatalogueReadyToGoRingsFilterInput: CatalogueReadyToGoRingsFilterInput;
  CatalogueFiltersPriceInput: CatalogueFiltersPriceInput;
  CatalogueReadyToGoRingFilters: ResolverTypeWrapper<CatalogueReadyToGoRingFilters>;
  CatalogueReadyToGoRing: ResolverTypeWrapper<CatalogueReadyToGoRing>;
  CatalogueReadyToGoRingTranslation: ResolverTypeWrapper<CatalogueReadyToGoRingTranslation>;
  CatalogueEngagementRingFilters: ResolverTypeWrapper<CatalogueEngagementRingFilters>;
  CatalogueEngagementRingFiltersVariation: ResolverTypeWrapper<CatalogueEngagementRingFiltersVariation>;
  CatalogueWeddingRingFilters: ResolverTypeWrapper<CatalogueWeddingRingFilters>;
  CatalogueWeddingRingFiltersVariation: ResolverTypeWrapper<CatalogueWeddingRingFiltersVariation>;
  CatalogueFilterInput: CatalogueFilterInput;
  CatalogueProduct: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CatalogueProduct']>;
  SalePrice: ResolverTypeWrapper<SalePrice>;
  GstType: GstType;
  Gst: ResolverTypeWrapper<Gst>;
  CatalogueVideo: ResolverTypeWrapper<CatalogueVideo>;
  CatalogueEngagementRing: ResolverTypeWrapper<Omit<CatalogueEngagementRing, 'sizes'> & { sizes: Array<ResolversTypes['RingSizeOrRecommendedRingSize']> }>;
  CatalogueEngagementRingSignatureStone: ResolverTypeWrapper<CatalogueEngagementRingSignatureStone>;
  CatalogueEngagementRingSignatureStoneInput: CatalogueEngagementRingSignatureStoneInput;
  CatalogueEngagementRingCentreStoneConstraints: ResolverTypeWrapper<CatalogueEngagementRingCentreStoneConstraints>;
  CatalogueEngagementRingCentreStoneWeightConstraint: ResolverTypeWrapper<CatalogueEngagementRingCentreStoneWeightConstraint>;
  CatalogueWeddingRing: ResolverTypeWrapper<Omit<CatalogueWeddingRing, 'sizes'> & { sizes: Array<ResolversTypes['RingSizeOrRecommendedRingSize']> }>;
  CatalogueBandType: ResolverTypeWrapper<CatalogueBandType>;
  CatalogueBandTypeTranslation: ResolverTypeWrapper<CatalogueBandTypeTranslation>;
  CatalogueMelee: ResolverTypeWrapper<CatalogueMelee>;
  CatalogueEngagementRingTranslation: ResolverTypeWrapper<CatalogueEngagementRingTranslation>;
  CatalogueWeddingRingTranslation: ResolverTypeWrapper<CatalogueWeddingRingTranslation>;
  CatalogueFilterPriceInput: CatalogueFilterPriceInput;
  CatalogueSortOrder: CatalogueSortOrder;
  CatalogueEngagementRingsFilterInput: CatalogueEngagementRingsFilterInput;
  CatalogueWeddingRingFilterInput: CatalogueWeddingRingFilterInput;
  PriceRangeBarInput: PriceRangeBarInput;
  CataloguePriceRangeFilter: ResolverTypeWrapper<CataloguePriceRangeFilter>;
  CataloguePriceRangeBar: ResolverTypeWrapper<CataloguePriceRangeBar>;
  CataloguePriceRange: ResolverTypeWrapper<CataloguePriceRange>;
  CatalogueFilterShapeItem: ResolverTypeWrapper<CatalogueFilterShapeItem>;
  CatalogueFilterMetalItem: ResolverTypeWrapper<CatalogueFilterMetalItem>;
  CatalogueFilterEngagementRingStylesItem: ResolverTypeWrapper<CatalogueFilterEngagementRingStylesItem>;
  CatalogueFilterEngagementRingDesingStyleItem: ResolverTypeWrapper<CatalogueFilterEngagementRingDesingStyleItem>;
  CatalogueFilterEngagementRingDesignFeatureItem: ResolverTypeWrapper<CatalogueFilterEngagementRingDesignFeatureItem>;
  CatalogueFilterWeddingRingCategoriesItem: ResolverTypeWrapper<CatalogueFilterWeddingRingCategoriesItem>;
  CatalogueFilterWeddingRingStylesItem: ResolverTypeWrapper<CatalogueFilterWeddingRingStylesItem>;
  CommissionJunctionInput: CommissionJunctionInput;
  Consultant: ResolverTypeWrapper<Consultant>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  Email: ResolverTypeWrapper<Scalars['Email']['output']>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']['output']>;
  PhoneNumberFormat: PhoneNumberFormat;
  PhoneNumberInput: PhoneNumberInput;
  PhoneNumberType: ResolverTypeWrapper<PhoneNumberType>;
  Uri: ResolverTypeWrapper<Scalars['Uri']['output']>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  Asset: ResolverTypeWrapper<Asset>;
  ImageSizeName: ImageSizeName;
  GenericImage: ResolverTypeWrapper<GenericImage>;
  ImageSize: ResolverTypeWrapper<ImageSize>;
  ImageSrc: ResolverTypeWrapper<ImageSrc>;
  PaginationInput: PaginationInput;
  GeoPoint: ResolverTypeWrapper<GeoPoint>;
  Country: ResolverTypeWrapper<Scalars['Country']['output']>;
  CountrySubdivision: ResolverTypeWrapper<Scalars['CountrySubdivision']['output']>;
  RegionCode: RegionCode;
  Region: ResolverTypeWrapper<Region>;
  DeliveryDate: ResolverTypeWrapper<DeliveryDate>;
  Order: ResolverTypeWrapper<Omit<Order, 'transactions'> & { transactions: Array<ResolversTypes['TransactionInterface']> }>;
  OrderStatus: ResolverTypeWrapper<OrderStatus>;
  ShipmentTrackingInformation: ResolverTypeWrapper<ShipmentTrackingInformation>;
  DeliverToAddressInput: DeliverToAddressInput;
  CollectFromShowroomInput: CollectFromShowroomInput;
  OrderCollectFromShowroomDeliveryInput: OrderCollectFromShowroomDeliveryInput;
  OrderShipToAddressInput: OrderShipToAddressInput;
  OrderBillingAddressInput: OrderBillingAddressInput;
  TransactionInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TransactionInterface']>;
  TransactionStatusCode: TransactionStatusCode;
  TransactionStatus: ResolverTypeWrapper<TransactionStatus>;
  LegacyTransaction: ResolverTypeWrapper<LegacyTransaction>;
  PaymentMethodContainer: ResolverTypeWrapper<PaymentMethodContainer>;
  NoPaymentMethod: ResolverTypeWrapper<NoPaymentMethod>;
  PaymentPlan: ResolverTypeWrapper<PaymentPlan>;
  PaymentPlanPaidRecord: ResolverTypeWrapper<PaymentPlanPaidRecord>;
  PaymentPlanUpcomingRecord: ResolverTypeWrapper<PaymentPlanUpcomingRecord>;
  OrderProduct: ResolverTypeWrapper<Omit<OrderProduct, 'designStudioProduct'> & { designStudioProduct?: Maybe<ResolversTypes['DesignStudioProduct']> }>;
  OrderAddress: ResolverTypeWrapper<OrderAddress>;
  SetDeliveryInformationResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SetDeliveryInformationResponse']>;
  SetDeliveryInformationFailureResponse: ResolverTypeWrapper<Omit<SetDeliveryInformationFailureResponse, 'errors'> & { errors: Array<ResolversTypes['SetDeliveryInformationError']> }>;
  SetDeliveryInformationError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SetDeliveryInformationError']>;
  SetDeliveryInformationSuccessResponse: ResolverTypeWrapper<SetDeliveryInformationSuccessResponse>;
  OrderAlreadyCompletedError: ResolverTypeWrapper<OrderAlreadyCompletedError>;
  OrderEmptyError: ResolverTypeWrapper<OrderEmptyError>;
  PaymentAmountInvalidError: ResolverTypeWrapper<PaymentAmountInvalidError>;
  OrderAddressNotConfirmedError: ResolverTypeWrapper<OrderAddressNotConfirmedError>;
  DesiredDeliveryDateInvalidError: ResolverTypeWrapper<DesiredDeliveryDateInvalidError>;
  PaymentMethodNotAllowedError: ResolverTypeWrapper<PaymentMethodNotAllowedError>;
  AvataxAddressInvalidError: ResolverTypeWrapper<AvataxAddressInvalidError>;
  AffirmFinanceOption: ResolverTypeWrapper<AffirmFinanceOption>;
  AffirmPaymentMethod: ResolverTypeWrapper<AffirmPaymentMethod>;
  AffirmTransactionInput: AffirmTransactionInput;
  AffirmTransaction: ResolverTypeWrapper<AffirmTransaction>;
  AffirmPaymentInput: AffirmPaymentInput;
  AffirmPaymentResponse: ResolverTypeWrapper<AffirmPaymentResponse>;
  AffirmCompleteTransactionInput: AffirmCompleteTransactionInput;
  AffirmCompleteTransactionResponse: ResolverTypeWrapper<AffirmCompleteTransactionResponse>;
  AllocationPaymentMethod: ResolverTypeWrapper<AllocationPaymentMethod>;
  AllocationTransaction: ResolverTypeWrapper<AllocationTransaction>;
  AllocationTransactionInput: AllocationTransactionInput;
  BankPaymentMethod: ResolverTypeWrapper<BankPaymentMethod>;
  BankTransaction: ResolverTypeWrapper<BankTransaction>;
  CheckoutcomPaymentMethod: ResolverTypeWrapper<CheckoutcomPaymentMethod>;
  CreateCheckoutcomTransactionInput: CreateCheckoutcomTransactionInput;
  CheckoutcomTransaction: ResolverTypeWrapper<CheckoutcomTransaction>;
  PayViaCheckoutcomInput: PayViaCheckoutcomInput;
  CompleteCheckoutcomTransactionInput: CompleteCheckoutcomTransactionInput;
  CreateCheckoutcomTransactionResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateCheckoutcomTransactionResponse']>;
  CreateCheckoutcomTransactionFailureResponse: ResolverTypeWrapper<Omit<CreateCheckoutcomTransactionFailureResponse, 'errors'> & { errors: Array<ResolversTypes['CreateCheckoutcomTransactionError']> }>;
  CreateCheckoutcomTransactionError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreateCheckoutcomTransactionError']>;
  CreateCheckoutcomTransactionSuccessResponse: ResolverTypeWrapper<CreateCheckoutcomTransactionSuccessResponse>;
  PayViaCheckoutcomResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PayViaCheckoutcomResponse']>;
  PayViaCheckoutcomFailureResponse: ResolverTypeWrapper<Omit<PayViaCheckoutcomFailureResponse, 'errors'> & { errors: Array<ResolversTypes['PayViaCheckoutcomError']> }>;
  PayViaCheckoutcomError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PayViaCheckoutcomError']>;
  PayViaCheckoutcomSuccessResponse: ResolverTypeWrapper<PayViaCheckoutcomSuccessResponse>;
  CompleteCheckoutcomTransactionPost3dsResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CompleteCheckoutcomTransactionPost3dsResponse']>;
  CompleteCheckoutcomTransactionPost3dsFailureResponse: ResolverTypeWrapper<Omit<CompleteCheckoutcomTransactionPost3dsFailureResponse, 'errors'> & { errors: Array<ResolversTypes['CompleteCheckoutcomTransactionPost3dsError']> }>;
  CompleteCheckoutcomTransactionPost3dsError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CompleteCheckoutcomTransactionPost3dsError']>;
  CompleteCheckoutcomTransactionPost3dsSuccessResponse: ResolverTypeWrapper<CompleteCheckoutcomTransactionPost3dsSuccessResponse>;
  CheckoutcomOperationDeclinedError: ResolverTypeWrapper<CheckoutcomOperationDeclinedError>;
  KlarnaFinanceOption: ResolverTypeWrapper<KlarnaFinanceOption>;
  KlarnaPaymentMethod: ResolverTypeWrapper<KlarnaPaymentMethod>;
  KlarnaTransactionInput: KlarnaTransactionInput;
  KlarnaTransaction: ResolverTypeWrapper<KlarnaTransaction>;
  KlarnaPaymentInput: KlarnaPaymentInput;
  KlarnaPaymentResponse: ResolverTypeWrapper<KlarnaPaymentResponse>;
  StripeTransaction: ResolverTypeWrapper<StripeTransaction>;
  MetalCode: MetalCode;
  Metal: ResolverTypeWrapper<Metal>;
  MetalColorCode: MetalColorCode;
  MetalColor: ResolverTypeWrapper<MetalColor>;
  MetalColorTranslation: ResolverTypeWrapper<MetalColorTranslation>;
  MetalElementCode: MetalElementCode;
  MetalElement: ResolverTypeWrapper<MetalElement>;
  MetalElementTranslation: ResolverTypeWrapper<MetalElementTranslation>;
  Currency: ResolverTypeWrapper<Scalars['Currency']['output']>;
  Money: ResolverTypeWrapper<Money>;
  CurrencyInput: CurrencyInput;
  MoneyInput: MoneyInput;
  ConvertMoneyInput: ConvertMoneyInput;
  ProductLabelTranslation: ResolverTypeWrapper<ProductLabelTranslation>;
  EngagementRingStyleLabel: ResolverTypeWrapper<EngagementRingStyleLabel>;
  EngagementRingStyleLabelCode: EngagementRingStyleLabelCode;
  EngagementRingDesignStyleLabel: ResolverTypeWrapper<EngagementRingDesignStyleLabel>;
  EngagementRingDesignStyleLabelCode: EngagementRingDesignStyleLabelCode;
  EngagementRingDesignFeatureLabel: ResolverTypeWrapper<EngagementRingDesignFeatureLabel>;
  EngagementRingDesignFeatureLabelCode: EngagementRingDesignFeatureLabelCode;
  WeddingRingCategoryLabelCode: WeddingRingCategoryLabelCode;
  WeddingRingCategoryLabel: ResolverTypeWrapper<WeddingRingCategoryLabel>;
  WeddingRingStyleLabel: ResolverTypeWrapper<WeddingRingStyleLabel>;
  WeddingRingStyleLabelCode: WeddingRingStyleLabelCode;
  JewelleryDesignStyleLabel: ResolverTypeWrapper<JewelleryDesignStyleLabel>;
  JewelleryDesignStyle: JewelleryDesignStyle;
  JewelleryDesignFeatureLabel: ResolverTypeWrapper<JewelleryDesignFeatureLabel>;
  JewelleryGemstoneLabel: ResolverTypeWrapper<JewelleryGemstoneLabel>;
  JewelleryGemstoneCode: JewelleryGemstoneCode;
  JewelleryDesignFeature: JewelleryDesignFeature;
  JewelleryBraceletProductStyleLabel: ResolverTypeWrapper<JewelleryBraceletProductStyleLabel>;
  JewelleryBraceletProductStyle: JewelleryBraceletProductStyle;
  JewelleryEarringsProductStyleLabel: ResolverTypeWrapper<JewelleryEarringsProductStyleLabel>;
  JewelleryEarringsProductStyle: JewelleryEarringsProductStyle;
  JewelleryNecklaceProductStyleLabel: ResolverTypeWrapper<JewelleryNecklaceProductStyleLabel>;
  JewelleryNecklaceProductStyle: JewelleryNecklaceProductStyle;
  PromoCode: ResolverTypeWrapper<PromoCode>;
  PromoCodeApplicationResult: ResolverTypeWrapper<PromoCodeApplicationResult>;
  PromoCodeApplicationError: PromoCodeApplicationError;
  QuestionnaireCompletedNewCustomerResponse: ResolverTypeWrapper<QuestionnaireCompletedNewCustomerResponse>;
  QuestionnaireCompletedExistingCustomerResponse: ResolverTypeWrapper<QuestionnaireCompletedExistingCustomerResponse>;
  QuestionnaireCompleteInput: QuestionnaireCompleteInput;
  QuestionnaireSubmissionNotificationInput: QuestionnaireSubmissionNotificationInput;
  QuestionnaireCustomerNotificationInput: QuestionnaireCustomerNotificationInput;
  QuestionnaireCompleteStepInput: QuestionnaireCompleteStepInput;
  QuestionnaireAnswerInput: QuestionnaireAnswerInput;
  QuestionnaireQuestionInput: QuestionnaireQuestionInput;
  QuestionnaireAnswerValueInput: QuestionnaireAnswerValueInput;
  QuestionnaireQuestionChoiceInput: QuestionnaireQuestionChoiceInput;
  QuestionnaireQuestionChoiceBehaviourInput: QuestionnaireQuestionChoiceBehaviourInput;
  QuestionnaireQuestionTextInput: QuestionnaireQuestionTextInput;
  QuestionnaireQuestionFloatInput: QuestionnaireQuestionFloatInput;
  QuestionnaireQuestionChoiceLayoutInput: QuestionnaireQuestionChoiceLayoutInput;
  QuestionnaireQuestionChoiceLayoutImageInput: QuestionnaireQuestionChoiceLayoutImageInput;
  QuestionnaireQuestionChoiceLayoutImageCardInput: QuestionnaireQuestionChoiceLayoutImageCardInput;
  QuestionnaireBackgroundColor: QuestionnaireBackgroundColor;
  QuestionnaireQuestionChoiceLayoutIconCardInput: QuestionnaireQuestionChoiceLayoutIconCardInput;
  QuestionnaireQuestionChoiceLayoutTextInput: QuestionnaireQuestionChoiceLayoutTextInput;
  QuestionnaireType: QuestionnaireType;
  QuestionnaireQuestionSnapshot: ResolverTypeWrapper<QuestionnaireQuestionSnapshot>;
  QuestionnaireCompletedQuestionnaire: ResolverTypeWrapper<QuestionnaireCompletedQuestionnaire>;
  QuestionnaireCompletedQuestionnaireStepSnapshot: ResolverTypeWrapper<Omit<QuestionnaireCompletedQuestionnaireStepSnapshot, 'answers'> & { answers: Array<ResolversTypes['QuestionnaireAnswer']> }>;
  QuestionnaireAnswer: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['QuestionnaireAnswer']>;
  QuestionnaireQuestionAnswerText: ResolverTypeWrapper<QuestionnaireQuestionAnswerText>;
  QuestionnaireQuestionAnswerSingleChoice: ResolverTypeWrapper<QuestionnaireQuestionAnswerSingleChoice>;
  QuestionnaireQuestionAnswerMultiChoice: ResolverTypeWrapper<QuestionnaireQuestionAnswerMultiChoice>;
  QuestionnaireQuestionAnswerNumber: ResolverTypeWrapper<QuestionnaireQuestionAnswerNumber>;
  QuestionnaireQuestionChoiceOptionSnapshot: ResolverTypeWrapper<Omit<QuestionnaireQuestionChoiceOptionSnapshot, 'layout'> & { layout: ResolversTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshot'] }>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard: ResolverTypeWrapper<QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotImage: ResolverTypeWrapper<QuestionnaireQuestionChoiceOptionLayoutSnapshotImage>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard: ResolverTypeWrapper<QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotText: ResolverTypeWrapper<QuestionnaireQuestionChoiceOptionLayoutSnapshotText>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshot: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['QuestionnaireQuestionChoiceOptionLayoutSnapshot']>;
  Showroom: ResolverTypeWrapper<Showroom>;
  ShowroomTranslation: ResolverTypeWrapper<ShowroomTranslation>;
  ShowroomLocation: ResolverTypeWrapper<ShowroomLocation>;
  StoneCrystalsFilterInput: StoneCrystalsFilterInput;
  StoneGradesFilterInput: StoneGradesFilterInput;
  StoneColorsFilterInput: StoneColorsFilterInput;
  StoneClarityFilterInput: StoneClarityFilterInput;
  StoneShapeFilterInput: StoneShapeFilterInput;
  Stone: ResolverTypeWrapper<Stone>;
  StoneCertificate: ResolverTypeWrapper<StoneCertificate>;
  StoneMeasurements: ResolverTypeWrapper<StoneMeasurements>;
  StonePolishCode: StonePolishCode;
  StonePolish: ResolverTypeWrapper<StonePolish>;
  StonePolishTranslation: ResolverTypeWrapper<StonePolishTranslation>;
  StoneSymmetryCode: StoneSymmetryCode;
  StoneSymmetry: ResolverTypeWrapper<StoneSymmetry>;
  StoneSymmetryTranslation: ResolverTypeWrapper<StoneSymmetryTranslation>;
  StoneFluorescenceCode: StoneFluorescenceCode;
  StoneFluorescence: ResolverTypeWrapper<StoneFluorescence>;
  StoneFluorescenceTranslation: ResolverTypeWrapper<StoneFluorescenceTranslation>;
  StoneShapeCode: StoneShapeCode;
  StoneShape: ResolverTypeWrapper<StoneShape>;
  StoneShapeTranslation: ResolverTypeWrapper<StoneShapeTranslation>;
  StoneCrystalCode: StoneCrystalCode;
  StoneCrystal: ResolverTypeWrapper<StoneCrystal>;
  StoneCrystalTranslation: ResolverTypeWrapper<StoneCrystalTranslation>;
  StoneColorCode: StoneColorCode;
  StoneColor: ResolverTypeWrapper<StoneColor>;
  StoneColorTranslation: ResolverTypeWrapper<StoneColorTranslation>;
  StoneCutCode: StoneCutCode;
  StoneCut: ResolverTypeWrapper<StoneCut>;
  StoneCutTranslation: ResolverTypeWrapper<StoneCutTranslation>;
  StoneClarityCode: StoneClarityCode;
  StoneClarity: ResolverTypeWrapper<StoneClarity>;
  StoneClarityTranslation: ResolverTypeWrapper<StoneClarityTranslation>;
  Melee: ResolverTypeWrapper<Melee>;
  StoneGradeCode: StoneGradeCode;
  StoneGrade: ResolverTypeWrapper<StoneGrade>;
  StoneGradeTranslation: ResolverTypeWrapper<StoneGradeTranslation>;
  StoneCategoryCode: StoneCategoryCode;
  StoneCategory: ResolverTypeWrapper<StoneCategory>;
  StoneCategoryTranslation: ResolverTypeWrapper<StoneCategoryTranslation>;
  GemType: GemType;
  Locale: ResolverTypeWrapper<Scalars['Locale']['output']>;
  Language: ResolverTypeWrapper<Language>;
  Translation: ResolverTypeWrapper<Translation>;
  DesignInspiration: ResolverTypeWrapper<DesignInspiration>;
  Customer: ResolverTypeWrapper<Omit<Customer, 'enquiries' | 'designStudioProducts' | 'designStudioProduct'> & { enquiries: Array<ResolversTypes['Enquiry']>, designStudioProducts: Array<ResolversTypes['DesignStudioProduct']>, designStudioProduct?: Maybe<ResolversTypes['DesignStudioProduct']> }>;
  Address: ResolverTypeWrapper<Address>;
  MagicLinkConsumeSuccess: ResolverTypeWrapper<MagicLinkConsumeSuccess>;
  MagicLinkConsumeError: ResolverTypeWrapper<MagicLinkConsumeError>;
  MagicLinkConsumeResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MagicLinkConsumeResponse']>;
  MagicLinkConsume: MagicLinkConsume;
  MagicLinkRequest: MagicLinkRequest;
  CustomerRegistrationResponse: ResolverTypeWrapper<CustomerRegistrationResponse>;
  CustomerRegistrationInput: CustomerRegistrationInput;
  CustomerRegistrationByManualInput: CustomerRegistrationByManualInput;
  CustomerRegistrationByGoogleInput: CustomerRegistrationByGoogleInput;
  User: ResolverTypeWrapper<User>;
  CredentialsInput: CredentialsInput;
  LoginResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['LoginResponse']>;
  LoginResponseFailure: ResolverTypeWrapper<LoginResponseFailure>;
  LoginResponseErrorCode: LoginResponseErrorCode;
  LoginResponseSuccess: ResolverTypeWrapper<LoginResponseSuccess>;
  EnquiryDiamondSearchProduct: EnquiryDiamondSearchProduct;
  EnquiryEngagementRingCollectionInput: EnquiryEngagementRingCollectionInput;
  EnquiryCustomEngagementRing: EnquiryCustomEngagementRing;
  EnquiryInput: EnquiryInput;
  EnquiryImageInput: EnquiryImageInput;
  EnquiryContactUsInput: EnquiryContactUsInput;
  EnquiryContactUsEnquiryPurpose: EnquiryContactUsEnquiryPurpose;
  EnquiryResponseExistingCustomer: ResolverTypeWrapper<EnquiryResponseExistingCustomer>;
  EnquiryResponseNewCustomer: ResolverTypeWrapper<EnquiryResponseNewCustomer>;
  EnquiryType: EnquiryType;
  Enquiry: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Enquiry']>;
  EnquiryConsultation: ResolverTypeWrapper<EnquiryConsultation>;
  EnquiryWeddingRingAddToCart: ResolverTypeWrapper<EnquiryWeddingRingAddToCart>;
  EnquiryEngagementRingAddToCart: ResolverTypeWrapper<EnquiryEngagementRingAddToCart>;
  EnquiryBaseInput: EnquiryBaseInput;
  GemsApiPriceBounds: ResolverTypeWrapper<GemsApiPriceBounds>;
  ConvertPriceBoundsForGems: ConvertPriceBoundsForGems;
  CalculateGemsApiStoneTotalSalePriceInput: CalculateGemsApiStoneTotalSalePriceInput;
  NonSkuLabGrownPricingCellFilters: NonSkuLabGrownPricingCellFilters;
  NonSkuGemStonesPricingCellFilters: NonSkuGemStonesPricingCellFilters;
  NonSkuGemstoneImage: ResolverTypeWrapper<NonSkuGemstoneImage>;
  NonSkuGemstoneCaratDimension: ResolverTypeWrapper<NonSkuGemstoneCaratDimension>;
  NonSkuGemstoneShapeDimension: ResolverTypeWrapper<NonSkuGemstoneShapeDimension>;
  NonSkuGemstoneGradeClarityDimension: ResolverTypeWrapper<NonSkuGemstoneGradeClarityDimension>;
  NonSkuLabGrownShapeDimensionUpdateInput: NonSkuLabGrownShapeDimensionUpdateInput;
  NonSkuGemstoneImageUpdateInput: NonSkuGemstoneImageUpdateInput;
  NonSkuGemstoneImageCreateInput: NonSkuGemstoneImageCreateInput;
  NonSkuGemStoneCreateInput: NonSkuGemStoneCreateInput;
  NonSkuGemstoneCaratDimensionCreateInput: NonSkuGemstoneCaratDimensionCreateInput;
  NonSkuGemstoneColorCrystalDimensionCreateInput: NonSkuGemstoneColorCrystalDimensionCreateInput;
  NonSkuGemstoneGradeClarityDimensionCreateInput: NonSkuGemstoneGradeClarityDimensionCreateInput;
  NonSkuGemstoneShapeDimensionCreateInput: NonSkuGemstoneShapeDimensionCreateInput;
  NonSkuLabGrownDiamondCreateInput: NonSkuLabGrownDiamondCreateInput;
  NonSkuLabGrownCaratDimensionCreateInput: NonSkuLabGrownCaratDimensionCreateInput;
  NonSkuLabGrownShapeDimensionCreateInput: NonSkuLabGrownShapeDimensionCreateInput;
  NonSkuLabGrownGradeDimensionCreateInput: NonSkuLabGrownGradeDimensionCreateInput;
  NonSkuImage: ResolverTypeWrapper<NonSkuImage>;
  NonSkuLabGrownGradeDimension: ResolverTypeWrapper<NonSkuLabGrownGradeDimension>;
  NonSkuLabGrownShapeDimension: ResolverTypeWrapper<NonSkuLabGrownShapeDimension>;
  NonSkuLabGrownCaratDimension: ResolverTypeWrapper<NonSkuLabGrownCaratDimension>;
  NonSkuGemstoneFilters: NonSkuGemstoneFilters;
  NonSkuGemstoneSortInput: NonSkuGemstoneSortInput;
  NonSkuGemstoneSortField: NonSkuGemstoneSortField;
  NonSkuGemstonesBounds: ResolverTypeWrapper<NonSkuGemstonesBounds>;
  NonSkuGemstoneType: ResolverTypeWrapper<NonSkuGemstoneType>;
  NonSkuCaratWeightRangeInput: NonSkuCaratWeightRangeInput;
  NonSkuPriceRange: ResolverTypeWrapper<NonSkuPriceRange>;
  NonSkuCaratWeightRange: ResolverTypeWrapper<NonSkuCaratWeightRange>;
  NonSkuLabGrownDiamondsBounds: ResolverTypeWrapper<NonSkuLabGrownDiamondsBounds>;
  NonSkuLabGrownDiamondSortInput: NonSkuLabGrownDiamondSortInput;
  NonSkuSortDirection: NonSkuSortDirection;
  NonSkuLabGrownSortField: NonSkuLabGrownSortField;
  NonSkuPriceRangeInput: NonSkuPriceRangeInput;
  NonSkuLabGrownDiamondsFilters: NonSkuLabGrownDiamondsFilters;
  NonSkuLabGrownDiamondFilterInput: NonSkuLabGrownDiamondFilterInput;
  NonSkuGemstoneFilterInput: NonSkuGemstoneFilterInput;
  NonSkuInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['NonSkuInterface']>;
  HistoricalNonSku: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['HistoricalNonSku']>;
  NonSkuLabGrownInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['NonSkuLabGrownInterface']>;
  NonSkuGemStoneInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['NonSkuGemStoneInterface']>;
  HistoricalNonSkuLabGrown: ResolverTypeWrapper<HistoricalNonSkuLabGrown>;
  NonSkuLabGrown: ResolverTypeWrapper<NonSkuLabGrown>;
  HistoricalNonSkuGemstone: ResolverTypeWrapper<HistoricalNonSkuGemstone>;
  NonSkuGemstone: ResolverTypeWrapper<NonSkuGemstone>;
  DesignStudioQuotationEngagementRingUpdate: DesignStudioQuotationEngagementRingUpdate;
  DesignStudioProductEngagementRingUpdate: DesignStudioProductEngagementRingUpdate;
  DesignStudioProductWeddingRingUpdate: DesignStudioProductWeddingRingUpdate;
  DesignStudioProduct: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['DesignStudioProduct']>;
  DesignStudioProductLooseStone: ResolverTypeWrapper<Omit<DesignStudioProductLooseStone, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversTypes['Quotation']>, finalQuotation?: Maybe<ResolversTypes['Quotation']> }>;
  DesignStudioProductAdditionalResize: ResolverTypeWrapper<Omit<DesignStudioProductAdditionalResize, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversTypes['Quotation']>, finalQuotation?: Maybe<ResolversTypes['Quotation']> }>;
  DesignStudioProductCustom: ResolverTypeWrapper<Omit<DesignStudioProductCustom, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversTypes['Quotation']>, finalQuotation?: Maybe<ResolversTypes['Quotation']> }>;
  DesignStudioProductGeneric: ResolverTypeWrapper<Omit<DesignStudioProductGeneric, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversTypes['Quotation']>, finalQuotation?: Maybe<ResolversTypes['Quotation']> }>;
  DesignStudioProductEngagementRing: ResolverTypeWrapper<Omit<DesignStudioProductEngagementRing, 'finalQuotation' | 'size' | 'availableSizes'> & { finalQuotation?: Maybe<ResolversTypes['Quotation']>, size?: Maybe<ResolversTypes['RingSizeOrRecommendedRingSize']>, availableSizes: Array<ResolversTypes['RingSizeOrRecommendedRingSize']> }>;
  DesignStudioMeleeItem: ResolverTypeWrapper<DesignStudioMeleeItem>;
  DesignStudioProductWeddingRing: ResolverTypeWrapper<Omit<DesignStudioProductWeddingRing, 'finalQuotation' | 'size' | 'availableSizes'> & { finalQuotation?: Maybe<ResolversTypes['Quotation']>, size?: Maybe<ResolversTypes['RingSizeOrRecommendedRingSize']>, availableSizes: Array<ResolversTypes['RingSizeOrRecommendedRingSize']> }>;
  Quotation: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Quotation']>;
  QuotationManualSurcharge: ResolverTypeWrapper<QuotationManualSurcharge>;
  QuotationPercentageSurcharge: ResolverTypeWrapper<QuotationPercentageSurcharge>;
  QuotationEngagementRing: ResolverTypeWrapper<QuotationEngagementRing>;
  DesignStudioExternalSideStone: ResolverTypeWrapper<DesignStudioExternalSideStone>;
  DesignStudioExternalCentreStone: ResolverTypeWrapper<DesignStudioExternalCentreStone>;
  DesignStudioInternalSideStone: ResolverTypeWrapper<Omit<DesignStudioInternalSideStone, 'item'> & { item: ResolversTypes['DesignStudioSideStoneItem'] }>;
  DesignStudioSideStone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DesignStudioSideStone']>;
  DesignStudioSideStoneItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DesignStudioSideStoneItem']>;
  DesignStudioSignatureStone: ResolverTypeWrapper<DesignStudioSignatureStone>;
  DesignStudioEngagementRingMount: ResolverTypeWrapper<Omit<DesignStudioEngagementRingMount, 'sideStones'> & { sideStones: Array<ResolversTypes['DesignStudioSideStone']> }>;
  DesignStudioEngagementRingCentreStone: ResolverTypeWrapper<Omit<DesignStudioEngagementRingCentreStone, 'stone'> & { stone: ResolversTypes['DesignStudioCentreStone'] }>;
  DesignStudioCentreStone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DesignStudioCentreStone']>;
  DesignStudioInternalCentreStone: ResolverTypeWrapper<Omit<DesignStudioInternalCentreStone, 'nonSku'> & { nonSku?: Maybe<ResolversTypes['HistoricalNonSku']> }>;
  QuotationWeddingRing: ResolverTypeWrapper<QuotationWeddingRing>;
  CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse']>;
  CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse']>;
  CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer: ResolverTypeWrapper<CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer>;
  CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer: ResolverTypeWrapper<CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer>;
  CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse']>;
  CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse']>;
  CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer: ResolverTypeWrapper<CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer>;
  CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer: ResolverTypeWrapper<CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer>;
  CatalogueDesignStudioCheckoutEngagementRingSuccess: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CatalogueDesignStudioCheckoutEngagementRingSuccess']>;
  CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio: ResolverTypeWrapper<CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio>;
  CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart: ResolverTypeWrapper<CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart>;
  AddToCartReadyToGoRingInput: AddToCartReadyToGoRingInput;
  AddToCartReadyToGoRingNewCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddToCartReadyToGoRingNewCustomerResponse']>;
  AddToCartReadyToGoRingExistingCustomerResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddToCartReadyToGoRingExistingCustomerResponse']>;
  AddToCartReadyToGoRingSuccessNewCustomer: ResolverTypeWrapper<AddToCartReadyToGoRingSuccessNewCustomer>;
  AddToCartReadyToGoRingSuccessExistingCustomer: ResolverTypeWrapper<AddToCartReadyToGoRingSuccessExistingCustomer>;
  StoneRecommendationNotFound: ResolverTypeWrapper<StoneRecommendationNotFound>;
  StoneRecommendationNonSkuLabGrownItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['StoneRecommendationNonSkuLabGrownItem']>;
  StoneRecommendationNonSkuGemstoneItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['StoneRecommendationNonSkuGemstoneItem']>;
  StoneRecommendationNonSkuGemstone: ResolverTypeWrapper<Omit<StoneRecommendationNonSkuGemstone, 'item'> & { item: ResolversTypes['StoneRecommendationNonSkuGemstoneItem'] }>;
  StoneRecommendationsResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['StoneRecommendationsResponse']>;
  StoneRecommendationsResponseFailure: ResolverTypeWrapper<StoneRecommendationsResponseFailure>;
  StoneRecommendationsResponseError: StoneRecommendationsResponseError;
  StoneRecommendationsResponseSuccess: ResolverTypeWrapper<Omit<StoneRecommendationsResponseSuccess, 'nonSkuLabGrownBestForPrice' | 'nonSkuLabGrownBestForSize'> & { nonSkuLabGrownBestForPrice: ResolversTypes['StoneRecommendationNonSkuLabGrownItem'], nonSkuLabGrownBestForSize: ResolversTypes['StoneRecommendationNonSkuLabGrownItem'] }>;
  StoneRecommendationsPriceRange: ResolverTypeWrapper<StoneRecommendationsPriceRange>;
  StoneRecommendationsNaturalDiamondFilters: ResolverTypeWrapper<StoneRecommendationsNaturalDiamondFilters>;
  StoneRecommendationsPercentRange: ResolverTypeWrapper<StoneRecommendationsPercentRange>;
  CatalogueDesignStudioEngagementRingValidationResult: ResolverTypeWrapper<Omit<CatalogueDesignStudioEngagementRingValidationResult, 'centreStone'> & { centreStone?: Maybe<ResolversTypes['CatalogueDesignStudioEngagementRingCentreStone']> }>;
  CatalogueDesignStudioEngagementRingCentreStone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CatalogueDesignStudioEngagementRingCentreStone']>;
  GemsApiStone: ResolverTypeWrapper<GemsApiStone>;
  DesignStudioEngagementRingCentreStoneInput: DesignStudioEngagementRingCentreStoneInput;
  DesignStudioEngagementRingError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['DesignStudioEngagementRingError']>;
  DesignStudioEngagementRingErrorShapeMismatch: ResolverTypeWrapper<DesignStudioEngagementRingErrorShapeMismatch>;
  DesignStudioEngagementRingErrorMinCaratWeight: ResolverTypeWrapper<DesignStudioEngagementRingErrorMinCaratWeight>;
  DesignStudioEngagementRingErrorMaxCaratWeight: ResolverTypeWrapper<DesignStudioEngagementRingErrorMaxCaratWeight>;
  DesignStudioEngagementRingFailure: ResolverTypeWrapper<Omit<DesignStudioEngagementRingFailure, 'errors'> & { errors: Array<ResolversTypes['DesignStudioEngagementRingError']> }>;
  DesignStudioWeddingRingInput: DesignStudioWeddingRingInput;
  DesignStudioJewelleryInput: DesignStudioJewelleryInput;
  UserCustomerEngagementRingRecommendations: ResolverTypeWrapper<UserCustomerEngagementRingRecommendations>;
  RingBuilderGetInput: RingBuilderGetInput;
  RingBuilderResolvedNewCustomer: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RingBuilderResolvedNewCustomer']>;
  RingBuilderResolvedExistingCustomer: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RingBuilderResolvedExistingCustomer']>;
  RingBuilderResolveResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RingBuilderResolveResult']>;
  RingBuilderResolvedFailure: ResolverTypeWrapper<RingBuilderResolvedFailure>;
  RingBuilderResolvedFailureError: RingBuilderResolvedFailureError;
  RingBuilderResolvedNewCustomerSuccess: ResolverTypeWrapper<Omit<RingBuilderResolvedNewCustomerSuccess, 'data'> & { data: ResolversTypes['RingBuilderResolveResult'] }>;
  RingBuilderResolvedExistingCustomerSuccess: ResolverTypeWrapper<Omit<RingBuilderResolvedExistingCustomerSuccess, 'data'> & { data: ResolversTypes['RingBuilderResolveResult'] }>;
  RingBuilderResolveMode: RingBuilderResolveMode;
  RingBuilderResolveInput: RingBuilderResolveInput;
  RingBuilderInput: RingBuilderInput;
  RingBuilderMountFragmentInput: RingBuilderMountFragmentInput;
  RingBuilderCentreStoneFragmentInput: RingBuilderCentreStoneFragmentInput;
  RingBuilder: ResolverTypeWrapper<Omit<RingBuilder, 'position1' | 'position2' | 'stoneRecommendations'> & { position1?: Maybe<ResolversTypes['RingBuilderFragment']>, position2?: Maybe<ResolversTypes['RingBuilderFragment']>, stoneRecommendations: ResolversTypes['StoneRecommendationsResponse'] }>;
  RingBuilderFragment: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RingBuilderFragment']>;
  RingBuilderMountFragment: ResolverTypeWrapper<RingBuilderMountFragment>;
  RingBuilderCentreStoneFragment: ResolverTypeWrapper<Omit<RingBuilderCentreStoneFragment, 'stone'> & { stone?: Maybe<ResolversTypes['RingBuilderCentreStone']> }>;
  RingBuilderCentreStone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RingBuilderCentreStone']>;
  MarketingDataResponse: ResolverTypeWrapper<MarketingDataResponse>;
  MarketingDataInput: MarketingDataInput;
  UtmInput: UtmInput;
  SearchEverywhereResponse: ResolverTypeWrapper<SearchEverywhereResponse>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  RecommendedRingSize: RecommendedRingSize;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  RingSize: RingSize;
  RingSizeInput: RingSizeInput;
  RingSizeOrRecommendedRingSize: ResolversUnionTypes<ResolversParentTypes>['RingSizeOrRecommendedRingSize'];
  BookingConsultationPurpose: BookingConsultationPurpose;
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  BookingConsultationType: BookingConsultationType;
  BookingConsultationMethod: BookingConsultationMethod;
  BookingConsultationComplexity: BookingConsultationComplexity;
  BookingConsultationComplexityTranslation: BookingConsultationComplexityTranslation;
  BookingCancelConsultationInput: BookingCancelConsultationInput;
  BookingConsultationSlotsResponse: BookingConsultationSlotsResponse;
  Float: Scalars['Float']['output'];
  BookingConsultationSlot: BookingConsultationSlot;
  BookingConsultationSlotInput: BookingConsultationSlotInput;
  BookingCreateConsultationNewCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['BookingCreateConsultationNewCustomerResponse'];
  BookingCreateConsultationExistingCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['BookingCreateConsultationExistingCustomerResponse'];
  BookingCreateConsultationSuccessNewCustomer: BookingCreateConsultationSuccessNewCustomer;
  BookingCreateConsultationSuccessExistingCustomer: BookingCreateConsultationSuccessExistingCustomer;
  BookingCreateConsultationErrorNoAvailableConsultants: BookingCreateConsultationErrorNoAvailableConsultants;
  BookingCreateConsultationInput: BookingCreateConsultationInput;
  BookingCreateConsultationSalesConsultationInput: BookingCreateConsultationSalesConsultationInput;
  BookingCreateConsultationAftercareConsultationInput: BookingCreateConsultationAftercareConsultationInput;
  BookingConsultation: Omit<BookingConsultation, 'consultationRoom'> & { consultationRoom?: Maybe<ResolversParentTypes['BookingConsultationRoom']> };
  BookingConsultationRoom: ResolversInterfaceTypes<ResolversParentTypes>['BookingConsultationRoom'];
  BookingInPersonConsultationRoom: BookingInPersonConsultationRoom;
  BookingVirtualConsultationRoom: BookingVirtualConsultationRoom;
  BookingConsultationMutableFields: BookingConsultationMutableFields;
  BookingConsultationAvailableDate: BookingConsultationAvailableDate;
  BookingConsultationAvailableShowroom: BookingConsultationAvailableShowroom;
  CatalogueImage: CatalogueImage;
  CatalogueJewellery: ResolversInterfaceTypes<ResolversParentTypes>['CatalogueJewellery'];
  CatalogueAggregate: CatalogueAggregate;
  CatalogueJewelleriesFilters: CatalogueJewelleriesFilters;
  CatalogueJewelleriesFiltersVariation: CatalogueJewelleriesFiltersVariation;
  CatalogueJewelleriesNecklacesFiltersVariation: CatalogueJewelleriesNecklacesFiltersVariation;
  CatalogueJewelleriesEarringsFiltersVariation: CatalogueJewelleriesEarringsFiltersVariation;
  CatalogueJewelleriesBraceletsFiltersVariation: CatalogueJewelleriesBraceletsFiltersVariation;
  CatalogueJewelleryNecklacesFilters: CatalogueJewelleryNecklacesFilters;
  CatalogueJewelleryBraceletsFilters: CatalogueJewelleryBraceletsFilters;
  CatalogueJewelleryEarringsFilters: CatalogueJewelleryEarringsFilters;
  CatalogueFilterJewelleryDesignStyleLabel: CatalogueFilterJewelleryDesignStyleLabel;
  CatalogueFilterJewelleryDesignFeatureLabel: CatalogueFilterJewelleryDesignFeatureLabel;
  CatalogueFilterJewelleryGemstoneLabel: CatalogueFilterJewelleryGemstoneLabel;
  CatalogueFilterJewelleryNecklaceProductStyleLabel: CatalogueFilterJewelleryNecklaceProductStyleLabel;
  CatalogueFilterJewelleryBraceletProductStyleLabel: CatalogueFilterJewelleryBraceletProductStyleLabel;
  CatalogueFilterJewelleryEarringsProductStyleLabel: CatalogueFilterJewelleryEarringsProductStyleLabel;
  CatalogueJewelleriesFilterInput: CatalogueJewelleriesFilterInput;
  CatalogueJewelleryFilterInput: CatalogueJewelleryFilterInput;
  CatalogueJewelleriesNecklacesFilterInput: CatalogueJewelleriesNecklacesFilterInput;
  CatalogueJewelleriesEarringsFilterInput: CatalogueJewelleriesEarringsFilterInput;
  CatalogueJewelleriesBraceletsFilterInput: CatalogueJewelleriesBraceletsFilterInput;
  CatalogueJewelleryNecklace: CatalogueJewelleryNecklace;
  CatalogueJewelleryNecklaceTranslation: CatalogueJewelleryNecklaceTranslation;
  CatalogueJewelleryEarrings: CatalogueJewelleryEarrings;
  CatalogueJewelleryEarringsTranslation: CatalogueJewelleryEarringsTranslation;
  CatalogueJewelleryBracelet: CatalogueJewelleryBracelet;
  CatalogueJewelleryBraceletTranslation: CatalogueJewelleryBraceletTranslation;
  CatalogueEngagementRingFilterInput: CatalogueEngagementRingFilterInput;
  CatalogueEngagementRingContainsProductsInput: CatalogueEngagementRingContainsProductsInput;
  CatalogueSortInput: CatalogueSortInput;
  CatalogueReadyToGoRingFilterInput: CatalogueReadyToGoRingFilterInput;
  CatalogueReadyToGoRingsFilterInput: CatalogueReadyToGoRingsFilterInput;
  CatalogueFiltersPriceInput: CatalogueFiltersPriceInput;
  CatalogueReadyToGoRingFilters: CatalogueReadyToGoRingFilters;
  CatalogueReadyToGoRing: CatalogueReadyToGoRing;
  CatalogueReadyToGoRingTranslation: CatalogueReadyToGoRingTranslation;
  CatalogueEngagementRingFilters: CatalogueEngagementRingFilters;
  CatalogueEngagementRingFiltersVariation: CatalogueEngagementRingFiltersVariation;
  CatalogueWeddingRingFilters: CatalogueWeddingRingFilters;
  CatalogueWeddingRingFiltersVariation: CatalogueWeddingRingFiltersVariation;
  CatalogueFilterInput: CatalogueFilterInput;
  CatalogueProduct: ResolversInterfaceTypes<ResolversParentTypes>['CatalogueProduct'];
  SalePrice: SalePrice;
  Gst: Gst;
  CatalogueVideo: CatalogueVideo;
  CatalogueEngagementRing: Omit<CatalogueEngagementRing, 'sizes'> & { sizes: Array<ResolversParentTypes['RingSizeOrRecommendedRingSize']> };
  CatalogueEngagementRingSignatureStone: CatalogueEngagementRingSignatureStone;
  CatalogueEngagementRingSignatureStoneInput: CatalogueEngagementRingSignatureStoneInput;
  CatalogueEngagementRingCentreStoneConstraints: CatalogueEngagementRingCentreStoneConstraints;
  CatalogueEngagementRingCentreStoneWeightConstraint: CatalogueEngagementRingCentreStoneWeightConstraint;
  CatalogueWeddingRing: Omit<CatalogueWeddingRing, 'sizes'> & { sizes: Array<ResolversParentTypes['RingSizeOrRecommendedRingSize']> };
  CatalogueBandType: CatalogueBandType;
  CatalogueBandTypeTranslation: CatalogueBandTypeTranslation;
  CatalogueMelee: CatalogueMelee;
  CatalogueEngagementRingTranslation: CatalogueEngagementRingTranslation;
  CatalogueWeddingRingTranslation: CatalogueWeddingRingTranslation;
  CatalogueFilterPriceInput: CatalogueFilterPriceInput;
  CatalogueEngagementRingsFilterInput: CatalogueEngagementRingsFilterInput;
  CatalogueWeddingRingFilterInput: CatalogueWeddingRingFilterInput;
  PriceRangeBarInput: PriceRangeBarInput;
  CataloguePriceRangeFilter: CataloguePriceRangeFilter;
  CataloguePriceRangeBar: CataloguePriceRangeBar;
  CataloguePriceRange: CataloguePriceRange;
  CatalogueFilterShapeItem: CatalogueFilterShapeItem;
  CatalogueFilterMetalItem: CatalogueFilterMetalItem;
  CatalogueFilterEngagementRingStylesItem: CatalogueFilterEngagementRingStylesItem;
  CatalogueFilterEngagementRingDesingStyleItem: CatalogueFilterEngagementRingDesingStyleItem;
  CatalogueFilterEngagementRingDesignFeatureItem: CatalogueFilterEngagementRingDesignFeatureItem;
  CatalogueFilterWeddingRingCategoriesItem: CatalogueFilterWeddingRingCategoriesItem;
  CatalogueFilterWeddingRingStylesItem: CatalogueFilterWeddingRingStylesItem;
  CommissionJunctionInput: CommissionJunctionInput;
  Consultant: Consultant;
  Query: {};
  Mutation: {};
  Decimal: Scalars['Decimal']['output'];
  DateTime: Scalars['DateTime']['output'];
  Date: Scalars['Date']['output'];
  Time: Scalars['Time']['output'];
  Email: Scalars['Email']['output'];
  PhoneNumber: Scalars['PhoneNumber']['output'];
  PhoneNumberInput: PhoneNumberInput;
  PhoneNumberType: PhoneNumberType;
  Uri: Scalars['Uri']['output'];
  Void: Scalars['Void']['output'];
  JSON: Scalars['JSON']['output'];
  Upload: Scalars['Upload']['output'];
  Asset: Asset;
  GenericImage: GenericImage;
  ImageSize: ImageSize;
  ImageSrc: ImageSrc;
  PaginationInput: PaginationInput;
  GeoPoint: GeoPoint;
  Country: Scalars['Country']['output'];
  CountrySubdivision: Scalars['CountrySubdivision']['output'];
  Region: Region;
  DeliveryDate: DeliveryDate;
  Order: Omit<Order, 'transactions'> & { transactions: Array<ResolversParentTypes['TransactionInterface']> };
  OrderStatus: OrderStatus;
  ShipmentTrackingInformation: ShipmentTrackingInformation;
  DeliverToAddressInput: DeliverToAddressInput;
  CollectFromShowroomInput: CollectFromShowroomInput;
  OrderCollectFromShowroomDeliveryInput: OrderCollectFromShowroomDeliveryInput;
  OrderShipToAddressInput: OrderShipToAddressInput;
  OrderBillingAddressInput: OrderBillingAddressInput;
  TransactionInterface: ResolversInterfaceTypes<ResolversParentTypes>['TransactionInterface'];
  TransactionStatus: TransactionStatus;
  LegacyTransaction: LegacyTransaction;
  PaymentMethodContainer: PaymentMethodContainer;
  NoPaymentMethod: NoPaymentMethod;
  PaymentPlan: PaymentPlan;
  PaymentPlanPaidRecord: PaymentPlanPaidRecord;
  PaymentPlanUpcomingRecord: PaymentPlanUpcomingRecord;
  OrderProduct: Omit<OrderProduct, 'designStudioProduct'> & { designStudioProduct?: Maybe<ResolversParentTypes['DesignStudioProduct']> };
  OrderAddress: OrderAddress;
  SetDeliveryInformationResponse: ResolversUnionTypes<ResolversParentTypes>['SetDeliveryInformationResponse'];
  SetDeliveryInformationFailureResponse: Omit<SetDeliveryInformationFailureResponse, 'errors'> & { errors: Array<ResolversParentTypes['SetDeliveryInformationError']> };
  SetDeliveryInformationError: ResolversUnionTypes<ResolversParentTypes>['SetDeliveryInformationError'];
  SetDeliveryInformationSuccessResponse: SetDeliveryInformationSuccessResponse;
  OrderAlreadyCompletedError: OrderAlreadyCompletedError;
  OrderEmptyError: OrderEmptyError;
  PaymentAmountInvalidError: PaymentAmountInvalidError;
  OrderAddressNotConfirmedError: OrderAddressNotConfirmedError;
  DesiredDeliveryDateInvalidError: DesiredDeliveryDateInvalidError;
  PaymentMethodNotAllowedError: PaymentMethodNotAllowedError;
  AvataxAddressInvalidError: AvataxAddressInvalidError;
  AffirmFinanceOption: AffirmFinanceOption;
  AffirmPaymentMethod: AffirmPaymentMethod;
  AffirmTransactionInput: AffirmTransactionInput;
  AffirmTransaction: AffirmTransaction;
  AffirmPaymentInput: AffirmPaymentInput;
  AffirmPaymentResponse: AffirmPaymentResponse;
  AffirmCompleteTransactionInput: AffirmCompleteTransactionInput;
  AffirmCompleteTransactionResponse: AffirmCompleteTransactionResponse;
  AllocationPaymentMethod: AllocationPaymentMethod;
  AllocationTransaction: AllocationTransaction;
  AllocationTransactionInput: AllocationTransactionInput;
  BankPaymentMethod: BankPaymentMethod;
  BankTransaction: BankTransaction;
  CheckoutcomPaymentMethod: CheckoutcomPaymentMethod;
  CreateCheckoutcomTransactionInput: CreateCheckoutcomTransactionInput;
  CheckoutcomTransaction: CheckoutcomTransaction;
  PayViaCheckoutcomInput: PayViaCheckoutcomInput;
  CompleteCheckoutcomTransactionInput: CompleteCheckoutcomTransactionInput;
  CreateCheckoutcomTransactionResponse: ResolversUnionTypes<ResolversParentTypes>['CreateCheckoutcomTransactionResponse'];
  CreateCheckoutcomTransactionFailureResponse: Omit<CreateCheckoutcomTransactionFailureResponse, 'errors'> & { errors: Array<ResolversParentTypes['CreateCheckoutcomTransactionError']> };
  CreateCheckoutcomTransactionError: ResolversUnionTypes<ResolversParentTypes>['CreateCheckoutcomTransactionError'];
  CreateCheckoutcomTransactionSuccessResponse: CreateCheckoutcomTransactionSuccessResponse;
  PayViaCheckoutcomResponse: ResolversUnionTypes<ResolversParentTypes>['PayViaCheckoutcomResponse'];
  PayViaCheckoutcomFailureResponse: Omit<PayViaCheckoutcomFailureResponse, 'errors'> & { errors: Array<ResolversParentTypes['PayViaCheckoutcomError']> };
  PayViaCheckoutcomError: ResolversUnionTypes<ResolversParentTypes>['PayViaCheckoutcomError'];
  PayViaCheckoutcomSuccessResponse: PayViaCheckoutcomSuccessResponse;
  CompleteCheckoutcomTransactionPost3dsResponse: ResolversUnionTypes<ResolversParentTypes>['CompleteCheckoutcomTransactionPost3dsResponse'];
  CompleteCheckoutcomTransactionPost3dsFailureResponse: Omit<CompleteCheckoutcomTransactionPost3dsFailureResponse, 'errors'> & { errors: Array<ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsError']> };
  CompleteCheckoutcomTransactionPost3dsError: ResolversUnionTypes<ResolversParentTypes>['CompleteCheckoutcomTransactionPost3dsError'];
  CompleteCheckoutcomTransactionPost3dsSuccessResponse: CompleteCheckoutcomTransactionPost3dsSuccessResponse;
  CheckoutcomOperationDeclinedError: CheckoutcomOperationDeclinedError;
  KlarnaFinanceOption: KlarnaFinanceOption;
  KlarnaPaymentMethod: KlarnaPaymentMethod;
  KlarnaTransactionInput: KlarnaTransactionInput;
  KlarnaTransaction: KlarnaTransaction;
  KlarnaPaymentInput: KlarnaPaymentInput;
  KlarnaPaymentResponse: KlarnaPaymentResponse;
  StripeTransaction: StripeTransaction;
  Metal: Metal;
  MetalColor: MetalColor;
  MetalColorTranslation: MetalColorTranslation;
  MetalElement: MetalElement;
  MetalElementTranslation: MetalElementTranslation;
  Currency: Scalars['Currency']['output'];
  Money: Money;
  CurrencyInput: CurrencyInput;
  MoneyInput: MoneyInput;
  ConvertMoneyInput: ConvertMoneyInput;
  ProductLabelTranslation: ProductLabelTranslation;
  EngagementRingStyleLabel: EngagementRingStyleLabel;
  EngagementRingDesignStyleLabel: EngagementRingDesignStyleLabel;
  EngagementRingDesignFeatureLabel: EngagementRingDesignFeatureLabel;
  WeddingRingCategoryLabel: WeddingRingCategoryLabel;
  WeddingRingStyleLabel: WeddingRingStyleLabel;
  JewelleryDesignStyleLabel: JewelleryDesignStyleLabel;
  JewelleryDesignFeatureLabel: JewelleryDesignFeatureLabel;
  JewelleryGemstoneLabel: JewelleryGemstoneLabel;
  JewelleryBraceletProductStyleLabel: JewelleryBraceletProductStyleLabel;
  JewelleryEarringsProductStyleLabel: JewelleryEarringsProductStyleLabel;
  JewelleryNecklaceProductStyleLabel: JewelleryNecklaceProductStyleLabel;
  PromoCode: PromoCode;
  PromoCodeApplicationResult: PromoCodeApplicationResult;
  QuestionnaireCompletedNewCustomerResponse: QuestionnaireCompletedNewCustomerResponse;
  QuestionnaireCompletedExistingCustomerResponse: QuestionnaireCompletedExistingCustomerResponse;
  QuestionnaireCompleteInput: QuestionnaireCompleteInput;
  QuestionnaireSubmissionNotificationInput: QuestionnaireSubmissionNotificationInput;
  QuestionnaireCustomerNotificationInput: QuestionnaireCustomerNotificationInput;
  QuestionnaireCompleteStepInput: QuestionnaireCompleteStepInput;
  QuestionnaireAnswerInput: QuestionnaireAnswerInput;
  QuestionnaireQuestionInput: QuestionnaireQuestionInput;
  QuestionnaireAnswerValueInput: QuestionnaireAnswerValueInput;
  QuestionnaireQuestionChoiceInput: QuestionnaireQuestionChoiceInput;
  QuestionnaireQuestionChoiceBehaviourInput: QuestionnaireQuestionChoiceBehaviourInput;
  QuestionnaireQuestionTextInput: QuestionnaireQuestionTextInput;
  QuestionnaireQuestionFloatInput: QuestionnaireQuestionFloatInput;
  QuestionnaireQuestionChoiceLayoutInput: QuestionnaireQuestionChoiceLayoutInput;
  QuestionnaireQuestionChoiceLayoutImageInput: QuestionnaireQuestionChoiceLayoutImageInput;
  QuestionnaireQuestionChoiceLayoutImageCardInput: QuestionnaireQuestionChoiceLayoutImageCardInput;
  QuestionnaireQuestionChoiceLayoutIconCardInput: QuestionnaireQuestionChoiceLayoutIconCardInput;
  QuestionnaireQuestionChoiceLayoutTextInput: QuestionnaireQuestionChoiceLayoutTextInput;
  QuestionnaireQuestionSnapshot: QuestionnaireQuestionSnapshot;
  QuestionnaireCompletedQuestionnaire: QuestionnaireCompletedQuestionnaire;
  QuestionnaireCompletedQuestionnaireStepSnapshot: Omit<QuestionnaireCompletedQuestionnaireStepSnapshot, 'answers'> & { answers: Array<ResolversParentTypes['QuestionnaireAnswer']> };
  QuestionnaireAnswer: ResolversInterfaceTypes<ResolversParentTypes>['QuestionnaireAnswer'];
  QuestionnaireQuestionAnswerText: QuestionnaireQuestionAnswerText;
  QuestionnaireQuestionAnswerSingleChoice: QuestionnaireQuestionAnswerSingleChoice;
  QuestionnaireQuestionAnswerMultiChoice: QuestionnaireQuestionAnswerMultiChoice;
  QuestionnaireQuestionAnswerNumber: QuestionnaireQuestionAnswerNumber;
  QuestionnaireQuestionChoiceOptionSnapshot: Omit<QuestionnaireQuestionChoiceOptionSnapshot, 'layout'> & { layout: ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshot'] };
  QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard: QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotImage: QuestionnaireQuestionChoiceOptionLayoutSnapshotImage;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard: QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotText: QuestionnaireQuestionChoiceOptionLayoutSnapshotText;
  QuestionnaireQuestionChoiceOptionLayoutSnapshot: ResolversUnionTypes<ResolversParentTypes>['QuestionnaireQuestionChoiceOptionLayoutSnapshot'];
  Showroom: Showroom;
  ShowroomTranslation: ShowroomTranslation;
  ShowroomLocation: ShowroomLocation;
  StoneCrystalsFilterInput: StoneCrystalsFilterInput;
  StoneGradesFilterInput: StoneGradesFilterInput;
  StoneColorsFilterInput: StoneColorsFilterInput;
  StoneClarityFilterInput: StoneClarityFilterInput;
  StoneShapeFilterInput: StoneShapeFilterInput;
  Stone: Stone;
  StoneCertificate: StoneCertificate;
  StoneMeasurements: StoneMeasurements;
  StonePolish: StonePolish;
  StonePolishTranslation: StonePolishTranslation;
  StoneSymmetry: StoneSymmetry;
  StoneSymmetryTranslation: StoneSymmetryTranslation;
  StoneFluorescence: StoneFluorescence;
  StoneFluorescenceTranslation: StoneFluorescenceTranslation;
  StoneShape: StoneShape;
  StoneShapeTranslation: StoneShapeTranslation;
  StoneCrystal: StoneCrystal;
  StoneCrystalTranslation: StoneCrystalTranslation;
  StoneColor: StoneColor;
  StoneColorTranslation: StoneColorTranslation;
  StoneCut: StoneCut;
  StoneCutTranslation: StoneCutTranslation;
  StoneClarity: StoneClarity;
  StoneClarityTranslation: StoneClarityTranslation;
  Melee: Melee;
  StoneGrade: StoneGrade;
  StoneGradeTranslation: StoneGradeTranslation;
  StoneCategory: StoneCategory;
  StoneCategoryTranslation: StoneCategoryTranslation;
  Locale: Scalars['Locale']['output'];
  Language: Language;
  Translation: Translation;
  DesignInspiration: DesignInspiration;
  Customer: Omit<Customer, 'enquiries' | 'designStudioProducts' | 'designStudioProduct'> & { enquiries: Array<ResolversParentTypes['Enquiry']>, designStudioProducts: Array<ResolversParentTypes['DesignStudioProduct']>, designStudioProduct?: Maybe<ResolversParentTypes['DesignStudioProduct']> };
  Address: Address;
  MagicLinkConsumeSuccess: MagicLinkConsumeSuccess;
  MagicLinkConsumeError: MagicLinkConsumeError;
  MagicLinkConsumeResponse: ResolversUnionTypes<ResolversParentTypes>['MagicLinkConsumeResponse'];
  MagicLinkConsume: MagicLinkConsume;
  MagicLinkRequest: MagicLinkRequest;
  CustomerRegistrationResponse: CustomerRegistrationResponse;
  CustomerRegistrationInput: CustomerRegistrationInput;
  CustomerRegistrationByManualInput: CustomerRegistrationByManualInput;
  CustomerRegistrationByGoogleInput: CustomerRegistrationByGoogleInput;
  User: User;
  CredentialsInput: CredentialsInput;
  LoginResponse: ResolversUnionTypes<ResolversParentTypes>['LoginResponse'];
  LoginResponseFailure: LoginResponseFailure;
  LoginResponseSuccess: LoginResponseSuccess;
  EnquiryDiamondSearchProduct: EnquiryDiamondSearchProduct;
  EnquiryEngagementRingCollectionInput: EnquiryEngagementRingCollectionInput;
  EnquiryCustomEngagementRing: EnquiryCustomEngagementRing;
  EnquiryInput: EnquiryInput;
  EnquiryImageInput: EnquiryImageInput;
  EnquiryContactUsInput: EnquiryContactUsInput;
  EnquiryResponseExistingCustomer: EnquiryResponseExistingCustomer;
  EnquiryResponseNewCustomer: EnquiryResponseNewCustomer;
  Enquiry: ResolversUnionTypes<ResolversParentTypes>['Enquiry'];
  EnquiryConsultation: EnquiryConsultation;
  EnquiryWeddingRingAddToCart: EnquiryWeddingRingAddToCart;
  EnquiryEngagementRingAddToCart: EnquiryEngagementRingAddToCart;
  EnquiryBaseInput: EnquiryBaseInput;
  GemsApiPriceBounds: GemsApiPriceBounds;
  ConvertPriceBoundsForGems: ConvertPriceBoundsForGems;
  CalculateGemsApiStoneTotalSalePriceInput: CalculateGemsApiStoneTotalSalePriceInput;
  NonSkuLabGrownPricingCellFilters: NonSkuLabGrownPricingCellFilters;
  NonSkuGemStonesPricingCellFilters: NonSkuGemStonesPricingCellFilters;
  NonSkuGemstoneImage: NonSkuGemstoneImage;
  NonSkuGemstoneCaratDimension: NonSkuGemstoneCaratDimension;
  NonSkuGemstoneShapeDimension: NonSkuGemstoneShapeDimension;
  NonSkuGemstoneGradeClarityDimension: NonSkuGemstoneGradeClarityDimension;
  NonSkuLabGrownShapeDimensionUpdateInput: NonSkuLabGrownShapeDimensionUpdateInput;
  NonSkuGemstoneImageUpdateInput: NonSkuGemstoneImageUpdateInput;
  NonSkuGemstoneImageCreateInput: NonSkuGemstoneImageCreateInput;
  NonSkuGemStoneCreateInput: NonSkuGemStoneCreateInput;
  NonSkuGemstoneCaratDimensionCreateInput: NonSkuGemstoneCaratDimensionCreateInput;
  NonSkuGemstoneColorCrystalDimensionCreateInput: NonSkuGemstoneColorCrystalDimensionCreateInput;
  NonSkuGemstoneGradeClarityDimensionCreateInput: NonSkuGemstoneGradeClarityDimensionCreateInput;
  NonSkuGemstoneShapeDimensionCreateInput: NonSkuGemstoneShapeDimensionCreateInput;
  NonSkuLabGrownDiamondCreateInput: NonSkuLabGrownDiamondCreateInput;
  NonSkuLabGrownCaratDimensionCreateInput: NonSkuLabGrownCaratDimensionCreateInput;
  NonSkuLabGrownShapeDimensionCreateInput: NonSkuLabGrownShapeDimensionCreateInput;
  NonSkuLabGrownGradeDimensionCreateInput: NonSkuLabGrownGradeDimensionCreateInput;
  NonSkuImage: NonSkuImage;
  NonSkuLabGrownGradeDimension: NonSkuLabGrownGradeDimension;
  NonSkuLabGrownShapeDimension: NonSkuLabGrownShapeDimension;
  NonSkuLabGrownCaratDimension: NonSkuLabGrownCaratDimension;
  NonSkuGemstoneFilters: NonSkuGemstoneFilters;
  NonSkuGemstoneSortInput: NonSkuGemstoneSortInput;
  NonSkuGemstonesBounds: NonSkuGemstonesBounds;
  NonSkuGemstoneType: NonSkuGemstoneType;
  NonSkuCaratWeightRangeInput: NonSkuCaratWeightRangeInput;
  NonSkuPriceRange: NonSkuPriceRange;
  NonSkuCaratWeightRange: NonSkuCaratWeightRange;
  NonSkuLabGrownDiamondsBounds: NonSkuLabGrownDiamondsBounds;
  NonSkuLabGrownDiamondSortInput: NonSkuLabGrownDiamondSortInput;
  NonSkuPriceRangeInput: NonSkuPriceRangeInput;
  NonSkuLabGrownDiamondsFilters: NonSkuLabGrownDiamondsFilters;
  NonSkuLabGrownDiamondFilterInput: NonSkuLabGrownDiamondFilterInput;
  NonSkuGemstoneFilterInput: NonSkuGemstoneFilterInput;
  NonSkuInterface: ResolversInterfaceTypes<ResolversParentTypes>['NonSkuInterface'];
  HistoricalNonSku: ResolversUnionTypes<ResolversParentTypes>['HistoricalNonSku'];
  NonSkuLabGrownInterface: ResolversInterfaceTypes<ResolversParentTypes>['NonSkuLabGrownInterface'];
  NonSkuGemStoneInterface: ResolversInterfaceTypes<ResolversParentTypes>['NonSkuGemStoneInterface'];
  HistoricalNonSkuLabGrown: HistoricalNonSkuLabGrown;
  NonSkuLabGrown: NonSkuLabGrown;
  HistoricalNonSkuGemstone: HistoricalNonSkuGemstone;
  NonSkuGemstone: NonSkuGemstone;
  DesignStudioQuotationEngagementRingUpdate: DesignStudioQuotationEngagementRingUpdate;
  DesignStudioProductEngagementRingUpdate: DesignStudioProductEngagementRingUpdate;
  DesignStudioProductWeddingRingUpdate: DesignStudioProductWeddingRingUpdate;
  DesignStudioProduct: ResolversInterfaceTypes<ResolversParentTypes>['DesignStudioProduct'];
  DesignStudioProductLooseStone: Omit<DesignStudioProductLooseStone, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversParentTypes['Quotation']>, finalQuotation?: Maybe<ResolversParentTypes['Quotation']> };
  DesignStudioProductAdditionalResize: Omit<DesignStudioProductAdditionalResize, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversParentTypes['Quotation']>, finalQuotation?: Maybe<ResolversParentTypes['Quotation']> };
  DesignStudioProductCustom: Omit<DesignStudioProductCustom, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversParentTypes['Quotation']>, finalQuotation?: Maybe<ResolversParentTypes['Quotation']> };
  DesignStudioProductGeneric: Omit<DesignStudioProductGeneric, 'quotations' | 'finalQuotation'> & { quotations: Array<ResolversParentTypes['Quotation']>, finalQuotation?: Maybe<ResolversParentTypes['Quotation']> };
  DesignStudioProductEngagementRing: Omit<DesignStudioProductEngagementRing, 'finalQuotation' | 'size' | 'availableSizes'> & { finalQuotation?: Maybe<ResolversParentTypes['Quotation']>, size?: Maybe<ResolversParentTypes['RingSizeOrRecommendedRingSize']>, availableSizes: Array<ResolversParentTypes['RingSizeOrRecommendedRingSize']> };
  DesignStudioMeleeItem: DesignStudioMeleeItem;
  DesignStudioProductWeddingRing: Omit<DesignStudioProductWeddingRing, 'finalQuotation' | 'size' | 'availableSizes'> & { finalQuotation?: Maybe<ResolversParentTypes['Quotation']>, size?: Maybe<ResolversParentTypes['RingSizeOrRecommendedRingSize']>, availableSizes: Array<ResolversParentTypes['RingSizeOrRecommendedRingSize']> };
  Quotation: ResolversInterfaceTypes<ResolversParentTypes>['Quotation'];
  QuotationManualSurcharge: QuotationManualSurcharge;
  QuotationPercentageSurcharge: QuotationPercentageSurcharge;
  QuotationEngagementRing: QuotationEngagementRing;
  DesignStudioExternalSideStone: DesignStudioExternalSideStone;
  DesignStudioExternalCentreStone: DesignStudioExternalCentreStone;
  DesignStudioInternalSideStone: Omit<DesignStudioInternalSideStone, 'item'> & { item: ResolversParentTypes['DesignStudioSideStoneItem'] };
  DesignStudioSideStone: ResolversUnionTypes<ResolversParentTypes>['DesignStudioSideStone'];
  DesignStudioSideStoneItem: ResolversUnionTypes<ResolversParentTypes>['DesignStudioSideStoneItem'];
  DesignStudioSignatureStone: DesignStudioSignatureStone;
  DesignStudioEngagementRingMount: Omit<DesignStudioEngagementRingMount, 'sideStones'> & { sideStones: Array<ResolversParentTypes['DesignStudioSideStone']> };
  DesignStudioEngagementRingCentreStone: Omit<DesignStudioEngagementRingCentreStone, 'stone'> & { stone: ResolversParentTypes['DesignStudioCentreStone'] };
  DesignStudioCentreStone: ResolversUnionTypes<ResolversParentTypes>['DesignStudioCentreStone'];
  DesignStudioInternalCentreStone: Omit<DesignStudioInternalCentreStone, 'nonSku'> & { nonSku?: Maybe<ResolversParentTypes['HistoricalNonSku']> };
  QuotationWeddingRing: QuotationWeddingRing;
  CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse'];
  CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse'];
  CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer: CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer;
  CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer: CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer;
  CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse'];
  CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse'];
  CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer: CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer;
  CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer: CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer;
  CatalogueDesignStudioCheckoutEngagementRingSuccess: ResolversUnionTypes<ResolversParentTypes>['CatalogueDesignStudioCheckoutEngagementRingSuccess'];
  CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio: CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio;
  CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart: CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart;
  AddToCartReadyToGoRingInput: AddToCartReadyToGoRingInput;
  AddToCartReadyToGoRingNewCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['AddToCartReadyToGoRingNewCustomerResponse'];
  AddToCartReadyToGoRingExistingCustomerResponse: ResolversUnionTypes<ResolversParentTypes>['AddToCartReadyToGoRingExistingCustomerResponse'];
  AddToCartReadyToGoRingSuccessNewCustomer: AddToCartReadyToGoRingSuccessNewCustomer;
  AddToCartReadyToGoRingSuccessExistingCustomer: AddToCartReadyToGoRingSuccessExistingCustomer;
  StoneRecommendationNotFound: StoneRecommendationNotFound;
  StoneRecommendationNonSkuLabGrownItem: ResolversUnionTypes<ResolversParentTypes>['StoneRecommendationNonSkuLabGrownItem'];
  StoneRecommendationNonSkuGemstoneItem: ResolversUnionTypes<ResolversParentTypes>['StoneRecommendationNonSkuGemstoneItem'];
  StoneRecommendationNonSkuGemstone: Omit<StoneRecommendationNonSkuGemstone, 'item'> & { item: ResolversParentTypes['StoneRecommendationNonSkuGemstoneItem'] };
  StoneRecommendationsResponse: ResolversUnionTypes<ResolversParentTypes>['StoneRecommendationsResponse'];
  StoneRecommendationsResponseFailure: StoneRecommendationsResponseFailure;
  StoneRecommendationsResponseSuccess: Omit<StoneRecommendationsResponseSuccess, 'nonSkuLabGrownBestForPrice' | 'nonSkuLabGrownBestForSize'> & { nonSkuLabGrownBestForPrice: ResolversParentTypes['StoneRecommendationNonSkuLabGrownItem'], nonSkuLabGrownBestForSize: ResolversParentTypes['StoneRecommendationNonSkuLabGrownItem'] };
  StoneRecommendationsPriceRange: StoneRecommendationsPriceRange;
  StoneRecommendationsNaturalDiamondFilters: StoneRecommendationsNaturalDiamondFilters;
  StoneRecommendationsPercentRange: StoneRecommendationsPercentRange;
  CatalogueDesignStudioEngagementRingValidationResult: Omit<CatalogueDesignStudioEngagementRingValidationResult, 'centreStone'> & { centreStone?: Maybe<ResolversParentTypes['CatalogueDesignStudioEngagementRingCentreStone']> };
  CatalogueDesignStudioEngagementRingCentreStone: ResolversUnionTypes<ResolversParentTypes>['CatalogueDesignStudioEngagementRingCentreStone'];
  GemsApiStone: GemsApiStone;
  DesignStudioEngagementRingCentreStoneInput: DesignStudioEngagementRingCentreStoneInput;
  DesignStudioEngagementRingError: ResolversUnionTypes<ResolversParentTypes>['DesignStudioEngagementRingError'];
  DesignStudioEngagementRingErrorShapeMismatch: DesignStudioEngagementRingErrorShapeMismatch;
  DesignStudioEngagementRingErrorMinCaratWeight: DesignStudioEngagementRingErrorMinCaratWeight;
  DesignStudioEngagementRingErrorMaxCaratWeight: DesignStudioEngagementRingErrorMaxCaratWeight;
  DesignStudioEngagementRingFailure: Omit<DesignStudioEngagementRingFailure, 'errors'> & { errors: Array<ResolversParentTypes['DesignStudioEngagementRingError']> };
  DesignStudioWeddingRingInput: DesignStudioWeddingRingInput;
  DesignStudioJewelleryInput: DesignStudioJewelleryInput;
  UserCustomerEngagementRingRecommendations: UserCustomerEngagementRingRecommendations;
  RingBuilderGetInput: RingBuilderGetInput;
  RingBuilderResolvedNewCustomer: ResolversUnionTypes<ResolversParentTypes>['RingBuilderResolvedNewCustomer'];
  RingBuilderResolvedExistingCustomer: ResolversUnionTypes<ResolversParentTypes>['RingBuilderResolvedExistingCustomer'];
  RingBuilderResolveResult: ResolversUnionTypes<ResolversParentTypes>['RingBuilderResolveResult'];
  RingBuilderResolvedFailure: RingBuilderResolvedFailure;
  RingBuilderResolvedNewCustomerSuccess: Omit<RingBuilderResolvedNewCustomerSuccess, 'data'> & { data: ResolversParentTypes['RingBuilderResolveResult'] };
  RingBuilderResolvedExistingCustomerSuccess: Omit<RingBuilderResolvedExistingCustomerSuccess, 'data'> & { data: ResolversParentTypes['RingBuilderResolveResult'] };
  RingBuilderResolveInput: RingBuilderResolveInput;
  RingBuilderInput: RingBuilderInput;
  RingBuilderMountFragmentInput: RingBuilderMountFragmentInput;
  RingBuilderCentreStoneFragmentInput: RingBuilderCentreStoneFragmentInput;
  RingBuilder: Omit<RingBuilder, 'position1' | 'position2' | 'stoneRecommendations'> & { position1?: Maybe<ResolversParentTypes['RingBuilderFragment']>, position2?: Maybe<ResolversParentTypes['RingBuilderFragment']>, stoneRecommendations: ResolversParentTypes['StoneRecommendationsResponse'] };
  RingBuilderFragment: ResolversUnionTypes<ResolversParentTypes>['RingBuilderFragment'];
  RingBuilderMountFragment: RingBuilderMountFragment;
  RingBuilderCentreStoneFragment: Omit<RingBuilderCentreStoneFragment, 'stone'> & { stone?: Maybe<ResolversParentTypes['RingBuilderCentreStone']> };
  RingBuilderCentreStone: ResolversUnionTypes<ResolversParentTypes>['RingBuilderCentreStone'];
  MarketingDataResponse: MarketingDataResponse;
  MarketingDataInput: MarketingDataInput;
  UtmInput: UtmInput;
  SearchEverywhereResponse: SearchEverywhereResponse;
}>;

export type oneOfDirectiveArgs = { };

export type oneOfDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = oneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type isGrantedDirectiveArgs = {
  role: Scalars['String']['input'];
};

export type isGrantedDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = isGrantedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RecommendedRingSizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RecommendedRingSize'] = ResolversParentTypes['RecommendedRingSize']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<RecommendedRingSizelabelArgs, 'region' | 'locale'>>;
  ringSize?: Resolver<ResolversTypes['RingSize'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingSizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingSize'] = ResolversParentTypes['RingSize']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<RingSizelabelArgs, 'region'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingSizeOrRecommendedRingSizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingSizeOrRecommendedRingSize'] = ResolversParentTypes['RingSizeOrRecommendedRingSize']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RingSize' | 'RecommendedRingSize', ParentType, ContextType>;
}>;

export type BookingConsultationPurposeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationPurpose'] = ResolversParentTypes['BookingConsultationPurpose']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  systemCode?: Resolver<ResolversTypes['BookingConsultationPurposeCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['BookingConsultationType'], ParentType, ContextType>;
  methods?: Resolver<Array<ResolversTypes['BookingConsultationMethod']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requireConsultant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slotLengthInMinutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  takesRoom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationType'] = ResolversParentTypes['BookingConsultationType']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['BookingConsultationTypeCode'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationMethod'] = ResolversParentTypes['BookingConsultationMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['BookingConsultationMethodCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  takesRoom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVirtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationComplexityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationComplexity'] = ResolversParentTypes['BookingConsultationComplexity']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['BookingConsultationComplexityCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['BookingConsultationComplexityTranslation'], ParentType, ContextType, RequireFields<BookingConsultationComplexitytranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationComplexityTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationComplexityTranslation'] = ResolversParentTypes['BookingConsultationComplexityTranslation']> = ResolversObject<{
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationSlotsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationSlotsResponse'] = ResolversParentTypes['BookingConsultationSlotsResponse']> = ResolversObject<{
  slots?: Resolver<Array<ResolversTypes['BookingConsultationSlot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationSlotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationSlot'] = ResolversParentTypes['BookingConsultationSlot']> = ResolversObject<{
  showroom?: Resolver<ResolversTypes['Showroom'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingCreateConsultationNewCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingCreateConsultationNewCustomerResponse'] = ResolversParentTypes['BookingCreateConsultationNewCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BookingCreateConsultationSuccessNewCustomer' | 'BookingCreateConsultationErrorNoAvailableConsultants', ParentType, ContextType>;
}>;

export type BookingCreateConsultationExistingCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingCreateConsultationExistingCustomerResponse'] = ResolversParentTypes['BookingCreateConsultationExistingCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BookingCreateConsultationSuccessExistingCustomer' | 'BookingCreateConsultationErrorNoAvailableConsultants', ParentType, ContextType>;
}>;

export type BookingCreateConsultationSuccessNewCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingCreateConsultationSuccessNewCustomer'] = ResolversParentTypes['BookingCreateConsultationSuccessNewCustomer']> = ResolversObject<{
  customerRegistrationResponse?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  consultation?: Resolver<ResolversTypes['BookingConsultation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingCreateConsultationSuccessExistingCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingCreateConsultationSuccessExistingCustomer'] = ResolversParentTypes['BookingCreateConsultationSuccessExistingCustomer']> = ResolversObject<{
  consultation?: Resolver<ResolversTypes['BookingConsultation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingCreateConsultationErrorNoAvailableConsultantsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingCreateConsultationErrorNoAvailableConsultants'] = ResolversParentTypes['BookingCreateConsultationErrorNoAvailableConsultants']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<BookingCreateConsultationErrorNoAvailableConsultantsmessageArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultation'] = ResolversParentTypes['BookingConsultation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['BookingConsultationPurpose'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['BookingConsultationMethod'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showroom?: Resolver<ResolversTypes['Showroom'], ParentType, ContextType>;
  startsAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isCancelled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  canBeCancelled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  consultant?: Resolver<Maybe<ResolversTypes['Consultant']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['BookingConsultationState'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salesforceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consultationRoom?: Resolver<Maybe<ResolversTypes['BookingConsultationRoom']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationRoomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationRoom'] = ResolversParentTypes['BookingConsultationRoom']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BookingInPersonConsultationRoom' | 'BookingVirtualConsultationRoom', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['BookingConsultationRoomKind'], ParentType, ContextType>;
}>;

export type BookingInPersonConsultationRoomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingInPersonConsultationRoom'] = ResolversParentTypes['BookingInPersonConsultationRoom']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['BookingConsultationRoomKind'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingVirtualConsultationRoomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingVirtualConsultationRoom'] = ResolversParentTypes['BookingVirtualConsultationRoom']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['BookingConsultationRoomKind'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationAvailableDateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationAvailableDate'] = ResolversParentTypes['BookingConsultationAvailableDate']> = ResolversObject<{
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  consultationAvailableShowrooms?: Resolver<Array<ResolversTypes['BookingConsultationAvailableShowroom']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingConsultationAvailableShowroomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookingConsultationAvailableShowroom'] = ResolversParentTypes['BookingConsultationAvailableShowroom']> = ResolversObject<{
  consultationSlots?: Resolver<Maybe<Array<Maybe<ResolversTypes['BookingConsultationSlot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueImage'] = ResolversParentTypes['CatalogueImage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['ImageSrc']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType, RequireFields<CatalogueImagesizeArgs, 'name'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewellery'] = ResolversParentTypes['CatalogueJewellery']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueJewelleryNecklace' | 'CatalogueJewelleryEarrings' | 'CatalogueJewelleryBracelet', ParentType, ContextType>;
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueProduct']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueJewellerysalePriceArgs, 'region' | 'currency'>>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  images360?: Resolver<Array<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['CatalogueVideo']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  designStyles?: Resolver<Array<ResolversTypes['JewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['JewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['JewelleryGemstoneLabel']>, ParentType, ContextType>;
  engravingDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
}>;

export type CatalogueAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueAggregate'] = ResolversParentTypes['CatalogueAggregate']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleriesFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleriesFilters'] = ResolversParentTypes['CatalogueJewelleriesFilters']> = ResolversObject<{
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueJewelleriesFilterspriceArgs, 'input'>>;
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  designStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryGemstoneLabel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleriesFiltersVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleriesFiltersVariation'] = ResolversParentTypes['CatalogueJewelleriesFiltersVariation']> = ResolversObject<{
  primaryMetal?: Resolver<Maybe<ResolversTypes['MetalCode']>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['JewelleryDesignStyle']>, ParentType, ContextType>;
  designFeature?: Resolver<Maybe<ResolversTypes['JewelleryDesignFeature']>, ParentType, ContextType>;
  gemstone?: Resolver<Maybe<ResolversTypes['JewelleryGemstoneCode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleriesNecklacesFiltersVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleriesNecklacesFiltersVariation'] = ResolversParentTypes['CatalogueJewelleriesNecklacesFiltersVariation']> = ResolversObject<{
  primaryMetal?: Resolver<Maybe<ResolversTypes['MetalCode']>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['JewelleryDesignStyle']>, ParentType, ContextType>;
  designFeature?: Resolver<Maybe<ResolversTypes['JewelleryDesignFeature']>, ParentType, ContextType>;
  gemstone?: Resolver<Maybe<ResolversTypes['JewelleryGemstoneCode']>, ParentType, ContextType>;
  productStyle?: Resolver<Maybe<ResolversTypes['JewelleryNecklaceProductStyle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleriesEarringsFiltersVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleriesEarringsFiltersVariation'] = ResolversParentTypes['CatalogueJewelleriesEarringsFiltersVariation']> = ResolversObject<{
  primaryMetal?: Resolver<Maybe<ResolversTypes['MetalCode']>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['JewelleryDesignStyle']>, ParentType, ContextType>;
  designFeature?: Resolver<Maybe<ResolversTypes['JewelleryDesignFeature']>, ParentType, ContextType>;
  gemstone?: Resolver<Maybe<ResolversTypes['JewelleryGemstoneCode']>, ParentType, ContextType>;
  productStyle?: Resolver<Maybe<ResolversTypes['JewelleryEarringsProductStyle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleriesBraceletsFiltersVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleriesBraceletsFiltersVariation'] = ResolversParentTypes['CatalogueJewelleriesBraceletsFiltersVariation']> = ResolversObject<{
  primaryMetal?: Resolver<Maybe<ResolversTypes['MetalCode']>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['JewelleryDesignStyle']>, ParentType, ContextType>;
  designFeature?: Resolver<Maybe<ResolversTypes['JewelleryDesignFeature']>, ParentType, ContextType>;
  gemstone?: Resolver<Maybe<ResolversTypes['JewelleryGemstoneCode']>, ParentType, ContextType>;
  productStyle?: Resolver<Maybe<ResolversTypes['JewelleryBraceletProductStyle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryNecklacesFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryNecklacesFilters'] = ResolversParentTypes['CatalogueJewelleryNecklacesFilters']> = ResolversObject<{
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueJewelleryNecklacesFilterspriceArgs, 'input'>>;
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  designStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  productStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryNecklaceProductStyleLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryGemstoneLabel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryBraceletsFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryBraceletsFilters'] = ResolversParentTypes['CatalogueJewelleryBraceletsFilters']> = ResolversObject<{
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueJewelleryBraceletsFilterspriceArgs, 'input'>>;
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  designStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  productStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryBraceletProductStyleLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryGemstoneLabel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryEarringsFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryEarringsFilters'] = ResolversParentTypes['CatalogueJewelleryEarringsFilters']> = ResolversObject<{
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueJewelleryEarringsFilterspriceArgs, 'input'>>;
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  designStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  productStyles?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryEarringsProductStyleLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['CatalogueFilterJewelleryGemstoneLabel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterJewelleryDesignStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterJewelleryDesignStyleLabel'] = ResolversParentTypes['CatalogueFilterJewelleryDesignStyleLabel']> = ResolversObject<{
  label?: Resolver<ResolversTypes['JewelleryDesignStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterJewelleryDesignFeatureLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterJewelleryDesignFeatureLabel'] = ResolversParentTypes['CatalogueFilterJewelleryDesignFeatureLabel']> = ResolversObject<{
  label?: Resolver<ResolversTypes['JewelleryDesignFeatureLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterJewelleryGemstoneLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterJewelleryGemstoneLabel'] = ResolversParentTypes['CatalogueFilterJewelleryGemstoneLabel']> = ResolversObject<{
  label?: Resolver<ResolversTypes['JewelleryGemstoneLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterJewelleryNecklaceProductStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterJewelleryNecklaceProductStyleLabel'] = ResolversParentTypes['CatalogueFilterJewelleryNecklaceProductStyleLabel']> = ResolversObject<{
  label?: Resolver<ResolversTypes['JewelleryNecklaceProductStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterJewelleryBraceletProductStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterJewelleryBraceletProductStyleLabel'] = ResolversParentTypes['CatalogueFilterJewelleryBraceletProductStyleLabel']> = ResolversObject<{
  label?: Resolver<ResolversTypes['JewelleryBraceletProductStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterJewelleryEarringsProductStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterJewelleryEarringsProductStyleLabel'] = ResolversParentTypes['CatalogueFilterJewelleryEarringsProductStyleLabel']> = ResolversObject<{
  label?: Resolver<ResolversTypes['JewelleryEarringsProductStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryNecklaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryNecklace'] = ResolversParentTypes['CatalogueJewelleryNecklace']> = ResolversObject<{
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueJewelleryNecklace']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueJewelleryNecklacesalePriceArgs, 'region' | 'currency'>>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['CatalogueJewelleryNecklace']>, ParentType, ContextType>;
  images360?: Resolver<Array<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['CatalogueVideo']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['CatalogueJewelleryNecklaceTranslation'], ParentType, ContextType, RequireFields<CatalogueJewelleryNecklacetranslationArgs, 'locale'>>;
  designStyles?: Resolver<Array<ResolversTypes['JewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['JewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['JewelleryGemstoneLabel']>, ParentType, ContextType>;
  productStyles?: Resolver<Array<ResolversTypes['JewelleryNecklaceProductStyleLabel']>, ParentType, ContextType>;
  engravingDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType, RequireFields<CatalogueJewelleryNecklacefirstAvailableDeliveryDateArgs, 'region' | 'hasEngraving'>>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryNecklacefinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryNecklacefinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryNecklaceTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryNecklaceTranslation'] = ResolversParentTypes['CatalogueJewelleryNecklaceTranslation']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryEarringsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryEarrings'] = ResolversParentTypes['CatalogueJewelleryEarrings']> = ResolversObject<{
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueJewelleryEarrings']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueJewelleryEarringssalePriceArgs, 'region' | 'currency'>>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['CatalogueJewelleryEarrings']>, ParentType, ContextType>;
  images360?: Resolver<Array<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['CatalogueVideo']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['CatalogueJewelleryEarringsTranslation'], ParentType, ContextType, RequireFields<CatalogueJewelleryEarringstranslationArgs, 'locale'>>;
  designStyles?: Resolver<Array<ResolversTypes['JewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['JewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['JewelleryGemstoneLabel']>, ParentType, ContextType>;
  productStyles?: Resolver<Array<ResolversTypes['JewelleryEarringsProductStyleLabel']>, ParentType, ContextType>;
  engravingDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType, RequireFields<CatalogueJewelleryEarringsfirstAvailableDeliveryDateArgs, 'region' | 'hasEngraving'>>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryEarringsfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryEarringsfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryEarringsTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryEarringsTranslation'] = ResolversParentTypes['CatalogueJewelleryEarringsTranslation']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryBraceletResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryBracelet'] = ResolversParentTypes['CatalogueJewelleryBracelet']> = ResolversObject<{
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueJewelleryBracelet']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueJewelleryBraceletsalePriceArgs, 'region' | 'currency'>>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['CatalogueJewelleryBracelet']>, ParentType, ContextType>;
  images360?: Resolver<Array<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['CatalogueVideo']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['CatalogueJewelleryBraceletTranslation'], ParentType, ContextType, RequireFields<CatalogueJewelleryBracelettranslationArgs, 'locale'>>;
  designStyles?: Resolver<Array<ResolversTypes['JewelleryDesignStyleLabel']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['JewelleryDesignFeatureLabel']>, ParentType, ContextType>;
  gemstones?: Resolver<Array<ResolversTypes['JewelleryGemstoneLabel']>, ParentType, ContextType>;
  productStyles?: Resolver<Array<ResolversTypes['JewelleryBraceletProductStyleLabel']>, ParentType, ContextType>;
  engravingDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType, RequireFields<CatalogueJewelleryBraceletfirstAvailableDeliveryDateArgs, 'region' | 'hasEngraving'>>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryBraceletfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueJewelleryBraceletfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueJewelleryBraceletTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueJewelleryBraceletTranslation'] = ResolversParentTypes['CatalogueJewelleryBraceletTranslation']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueReadyToGoRingFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueReadyToGoRingFilters'] = ResolversParentTypes['CatalogueReadyToGoRingFilters']> = ResolversObject<{
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueReadyToGoRingFilterspriceArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueReadyToGoRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueReadyToGoRing'] = ResolversParentTypes['CatalogueReadyToGoRing']> = ResolversObject<{
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueReadyToGoRing']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['CatalogueReadyToGoRingTranslation'], ParentType, ContextType, RequireFields<CatalogueReadyToGoRingtranslationArgs, 'locale'>>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueReadyToGoRingsalePriceArgs, 'region' | 'currency'>>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  carat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gemType?: Resolver<ResolversTypes['GemType'], ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['RecommendedRingSize']>, ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['CatalogueReadyToGoRing']>, ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isReadyToShip?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType, RequireFields<CatalogueReadyToGoRingfirstAvailableDeliveryDateArgs, 'region'>>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueReadyToGoRingfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueReadyToGoRingfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueReadyToGoRingTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueReadyToGoRingTranslation'] = ResolversParentTypes['CatalogueReadyToGoRingTranslation']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRingFilters'] = ResolversParentTypes['CatalogueEngagementRingFilters']> = ResolversObject<{
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueEngagementRingFilterspriceArgs, 'input'>>;
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  centreStoneShapes?: Resolver<Array<ResolversTypes['CatalogueFilterShapeItem']>, ParentType, ContextType>;
  ringStyles?: Resolver<Array<ResolversTypes['CatalogueFilterEngagementRingStylesItem']>, ParentType, ContextType>;
  designStyles?: Resolver<Array<ResolversTypes['CatalogueFilterEngagementRingDesingStyleItem']>, ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['CatalogueFilterEngagementRingDesignFeatureItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingFiltersVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRingFiltersVariation'] = ResolversParentTypes['CatalogueEngagementRingFiltersVariation']> = ResolversObject<{
  primaryMetal?: Resolver<Maybe<ResolversTypes['MetalCode']>, ParentType, ContextType>;
  centreStoneShape?: Resolver<Maybe<ResolversTypes['StoneShapeCode']>, ParentType, ContextType>;
  ringStyle?: Resolver<Maybe<ResolversTypes['EngagementRingStyleLabelCode']>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['EngagementRingDesignStyleLabelCode']>, ParentType, ContextType>;
  designFeature?: Resolver<Maybe<ResolversTypes['EngagementRingDesignFeatureLabelCode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueWeddingRingFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueWeddingRingFilters'] = ResolversParentTypes['CatalogueWeddingRingFilters']> = ResolversObject<{
  primaryMetals?: Resolver<Array<ResolversTypes['CatalogueFilterMetalItem']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['CataloguePriceRangeFilter'], ParentType, ContextType, RequireFields<CatalogueWeddingRingFilterspriceArgs, 'input'>>;
  categories?: Resolver<Array<ResolversTypes['CatalogueFilterWeddingRingCategoriesItem']>, ParentType, ContextType>;
  ringStyles?: Resolver<Array<ResolversTypes['CatalogueFilterWeddingRingStylesItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueWeddingRingFiltersVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueWeddingRingFiltersVariation'] = ResolversParentTypes['CatalogueWeddingRingFiltersVariation']> = ResolversObject<{
  primaryMetal?: Resolver<Maybe<ResolversTypes['MetalCode']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['WeddingRingCategoryLabelCode']>, ParentType, ContextType>;
  ringStyle?: Resolver<Maybe<ResolversTypes['WeddingRingStyleLabelCode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueProduct'] = ResolversParentTypes['CatalogueProduct']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueJewelleryNecklace' | 'CatalogueJewelleryEarrings' | 'CatalogueJewelleryBracelet' | 'CatalogueReadyToGoRing' | 'CatalogueEngagementRing' | 'CatalogueWeddingRing', ParentType, ContextType>;
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueProduct']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueProductsalePriceArgs, 'region' | 'currency'>>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueProductfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueProductfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
}>;

export type SalePriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalePrice'] = ResolversParentTypes['SalePrice']> = ResolversObject<{
  total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  gst?: Resolver<Maybe<ResolversTypes['Gst']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GstResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Gst'] = ResolversParentTypes['Gst']> = ResolversObject<{
  type?: Resolver<ResolversTypes['GstType'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueVideoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueVideo'] = ResolversParentTypes['CatalogueVideo']> = ResolversObject<{
  uri?: Resolver<ResolversTypes['Uri'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRing'] = ResolversParentTypes['CatalogueEngagementRing']> = ResolversObject<{
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ringStyles?: Resolver<Array<ResolversTypes['EngagementRingStyleLabel']>, ParentType, ContextType>;
  designStyle?: Resolver<ResolversTypes['EngagementRingDesignStyleLabel'], ParentType, ContextType>;
  designFeatures?: Resolver<Array<ResolversTypes['EngagementRingDesignFeatureLabel']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType>;
  images360?: Resolver<Array<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['CatalogueVideo']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  signatureStone?: Resolver<Maybe<ResolversTypes['Melee']>, ParentType, ContextType>;
  meleeItems?: Resolver<Array<ResolversTypes['CatalogueMelee']>, ParentType, ContextType>;
  centreStoneConstraints?: Resolver<ResolversTypes['CatalogueEngagementRingCentreStoneConstraints'], ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bandWidth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  bandThickness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isResizeable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAvailableForRingBuilder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueEngagementRingsalePriceArgs, 'region' | 'currency'>>;
  translation?: Resolver<ResolversTypes['CatalogueEngagementRingTranslation'], ParentType, ContextType, RequireFields<CatalogueEngagementRingtranslationArgs, 'locale'>>;
  variations?: Resolver<Array<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['RingSizeOrRecommendedRingSize']>, ParentType, ContextType, RequireFields<CatalogueEngagementRingsizesArgs, 'region'>>;
  signatureStones?: Resolver<Array<ResolversTypes['CatalogueEngagementRingSignatureStone']>, ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType, RequireFields<CatalogueEngagementRingfirstAvailableDeliveryDateArgs, 'region' | 'hasEngraving'>>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueEngagementRingfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueEngagementRingfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingSignatureStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRingSignatureStone'] = ResolversParentTypes['CatalogueEngagementRingSignatureStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Uri'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<CatalogueEngagementRingSignatureStonepriceArgs, 'region' | 'currency'>>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['StoneCrystal'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingCentreStoneConstraintsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRingCentreStoneConstraints'] = ResolversParentTypes['CatalogueEngagementRingCentreStoneConstraints']> = ResolversObject<{
  weight?: Resolver<ResolversTypes['CatalogueEngagementRingCentreStoneWeightConstraint'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingCentreStoneWeightConstraintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRingCentreStoneWeightConstraint'] = ResolversParentTypes['CatalogueEngagementRingCentreStoneWeightConstraint']> = ResolversObject<{
  min?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueWeddingRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueWeddingRing'] = ResolversParentTypes['CatalogueWeddingRing']> = ResolversObject<{
  catalogueCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTitleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['WeddingRingCategoryLabel']>, ParentType, ContextType>;
  ringStyles?: Resolver<Array<ResolversTypes['WeddingRingStyleLabel']>, ParentType, ContextType>;
  relatedProducts?: Resolver<Array<ResolversTypes['CatalogueWeddingRing']>, ParentType, ContextType>;
  images360?: Resolver<Array<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['CatalogueVideo']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['GenericImage']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['CatalogueImage']>, ParentType, ContextType>;
  primaryMetal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  signatureStone?: Resolver<Maybe<ResolversTypes['Melee']>, ParentType, ContextType>;
  meleeItems?: Resolver<Array<ResolversTypes['CatalogueMelee']>, ParentType, ContextType>;
  deliveryDays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bandWidth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  bandThickness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  bandType?: Resolver<Maybe<ResolversTypes['CatalogueBandType']>, ParentType, ContextType>;
  isReturnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isResizeable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['SalePrice'], ParentType, ContextType, RequireFields<CatalogueWeddingRingsalePriceArgs, 'region' | 'currency'>>;
  translation?: Resolver<ResolversTypes['CatalogueWeddingRingTranslation'], ParentType, ContextType, RequireFields<CatalogueWeddingRingtranslationArgs, 'locale'>>;
  variations?: Resolver<Array<ResolversTypes['CatalogueWeddingRing']>, ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['RingSizeOrRecommendedRingSize']>, ParentType, ContextType, RequireFields<CatalogueWeddingRingsizesArgs, 'region'>>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType, RequireFields<CatalogueWeddingRingfirstAvailableDeliveryDateArgs, 'region' | 'hasEngraving'>>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueWeddingRingfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<CatalogueWeddingRingfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueBandTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueBandType'] = ResolversParentTypes['CatalogueBandType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['CatalogueBandTypeTranslation'], ParentType, ContextType, RequireFields<CatalogueBandTypetranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueBandTypeTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueBandTypeTranslation'] = ResolversParentTypes['CatalogueBandTypeTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueMeleeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueMelee'] = ResolversParentTypes['CatalogueMelee']> = ResolversObject<{
  melee?: Resolver<ResolversTypes['Melee'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueEngagementRingTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueEngagementRingTranslation'] = ResolversParentTypes['CatalogueEngagementRingTranslation']> = ResolversObject<{
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueWeddingRingTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueWeddingRingTranslation'] = ResolversParentTypes['CatalogueWeddingRingTranslation']> = ResolversObject<{
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CataloguePriceRangeFilterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CataloguePriceRangeFilter'] = ResolversParentTypes['CataloguePriceRangeFilter']> = ResolversObject<{
  currentRange?: Resolver<ResolversTypes['CataloguePriceRange'], ParentType, ContextType>;
  absoluteRange?: Resolver<ResolversTypes['CataloguePriceRange'], ParentType, ContextType>;
  bars?: Resolver<Array<ResolversTypes['CataloguePriceRangeBar']>, ParentType, ContextType, RequireFields<CataloguePriceRangeFilterbarsArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CataloguePriceRangeBarResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CataloguePriceRangeBar'] = ResolversParentTypes['CataloguePriceRangeBar']> = ResolversObject<{
  range?: Resolver<ResolversTypes['CataloguePriceRange'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CataloguePriceRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CataloguePriceRange'] = ResolversParentTypes['CataloguePriceRange']> = ResolversObject<{
  min?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterShapeItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterShapeItem'] = ResolversParentTypes['CatalogueFilterShapeItem']> = ResolversObject<{
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterMetalItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterMetalItem'] = ResolversParentTypes['CatalogueFilterMetalItem']> = ResolversObject<{
  metal?: Resolver<ResolversTypes['Metal'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterEngagementRingStylesItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterEngagementRingStylesItem'] = ResolversParentTypes['CatalogueFilterEngagementRingStylesItem']> = ResolversObject<{
  label?: Resolver<ResolversTypes['EngagementRingStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterEngagementRingDesingStyleItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterEngagementRingDesingStyleItem'] = ResolversParentTypes['CatalogueFilterEngagementRingDesingStyleItem']> = ResolversObject<{
  label?: Resolver<ResolversTypes['EngagementRingDesignStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterEngagementRingDesignFeatureItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterEngagementRingDesignFeatureItem'] = ResolversParentTypes['CatalogueFilterEngagementRingDesignFeatureItem']> = ResolversObject<{
  label?: Resolver<ResolversTypes['EngagementRingDesignFeatureLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterWeddingRingCategoriesItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterWeddingRingCategoriesItem'] = ResolversParentTypes['CatalogueFilterWeddingRingCategoriesItem']> = ResolversObject<{
  label?: Resolver<ResolversTypes['WeddingRingCategoryLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueFilterWeddingRingStylesItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueFilterWeddingRingStylesItem'] = ResolversParentTypes['CatalogueFilterWeddingRingStylesItem']> = ResolversObject<{
  label?: Resolver<ResolversTypes['WeddingRingStyleLabel'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConsultantResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Consultant'] = ResolversParentTypes['Consultant']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['Uri'], ParentType, ContextType>;
  avatarImage?: Resolver<ResolversTypes['GenericImage'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  canTakeConsultations?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  showroom?: Resolver<Maybe<ResolversTypes['Showroom']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookingConsultationPurposes?: Resolver<Array<ResolversTypes['BookingConsultationPurpose']>, ParentType, ContextType>;
  bookingConsultationComplexities?: Resolver<Array<ResolversTypes['BookingConsultationComplexity']>, ParentType, ContextType>;
  bookingConsultationAvailableSlots?: Resolver<ResolversTypes['BookingConsultationSlotsResponse'], ParentType, ContextType, RequireFields<QuerybookingConsultationAvailableSlotsArgs, 'input'>>;
  bookingConsultationShowPhone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  validateConsultationInput?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryvalidateConsultationInputArgs, 'input'>>;
  bookingConsultation?: Resolver<Maybe<ResolversTypes['BookingConsultation']>, ParentType, ContextType, RequireFields<QuerybookingConsultationArgs, 'id'>>;
  bookingConsultants?: Resolver<Array<ResolversTypes['Consultant']>, ParentType, ContextType>;
  bookingShowrooms?: Resolver<Array<ResolversTypes['Showroom']>, ParentType, ContextType>;
  bookingCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<QuerybookingCustomerArgs, 'id'>>;
  bookingAvailableTransitions?: Resolver<Array<Maybe<ResolversTypes['BookingConsultationTransition']>>, ParentType, ContextType, RequireFields<QuerybookingAvailableTransitionsArgs, 'id'>>;
  bookingInPersonConsultationRooms?: Resolver<Array<ResolversTypes['BookingConsultationRoom']>, ParentType, ContextType, RequireFields<QuerybookingInPersonConsultationRoomsArgs, 'showroomId' | 'kind' | 'consultationPurposeId'>>;
  bookingVirtualConsultationRooms?: Resolver<Array<ResolversTypes['BookingConsultationRoom']>, ParentType, ContextType, RequireFields<QuerybookingVirtualConsultationRoomsArgs, 'showroomId' | 'kind' | 'consultationPurposeId'>>;
  bookingConsultationAvailableSlotsByConsultant?: Resolver<Array<ResolversTypes['BookingConsultationAvailableDate']>, ParentType, ContextType, RequireFields<QuerybookingConsultationAvailableSlotsByConsultantArgs, 'consultationPurpose' | 'consultationMethod' | 'showroom' | 'consultationRoomKind'>>;
  catalogueProducts?: Resolver<Array<ResolversTypes['CatalogueProduct']>, ParentType, ContextType, Partial<QuerycatalogueProductsArgs>>;
  catalogueEngagementRings?: Resolver<Array<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType, Partial<QuerycatalogueEngagementRingsArgs>>;
  catalogueEngagementRing?: Resolver<Maybe<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType, RequireFields<QuerycatalogueEngagementRingArgs, 'filter'>>;
  catalogueEngagementRingsAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueEngagementRingsAggregateArgs>>;
  catalogueEngagementRingFilters?: Resolver<ResolversTypes['CatalogueEngagementRingFilters'], ParentType, ContextType, RequireFields<QuerycatalogueEngagementRingFiltersArgs, 'input'>>;
  catalogueEngagementRingFiltersVariations?: Resolver<Array<ResolversTypes['CatalogueEngagementRingFiltersVariation']>, ParentType, ContextType>;
  catalogueEngagementRingContainsProducts?: Resolver<Array<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QuerycatalogueEngagementRingContainsProductsArgs, 'input'>>;
  catalogueWeddingRings?: Resolver<Array<ResolversTypes['CatalogueWeddingRing']>, ParentType, ContextType, Partial<QuerycatalogueWeddingRingsArgs>>;
  catalogueWeddingRingsAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueWeddingRingsAggregateArgs>>;
  catalogueWeddingRingFilters?: Resolver<ResolversTypes['CatalogueWeddingRingFilters'], ParentType, ContextType, RequireFields<QuerycatalogueWeddingRingFiltersArgs, 'input'>>;
  catalogueWeddingRingFilterVariations?: Resolver<Array<ResolversTypes['CatalogueWeddingRingFiltersVariation']>, ParentType, ContextType>;
  catalogueReadyToGoRings?: Resolver<Array<ResolversTypes['CatalogueReadyToGoRing']>, ParentType, ContextType, Partial<QuerycatalogueReadyToGoRingsArgs>>;
  catalogueReadyToGoRing?: Resolver<Maybe<ResolversTypes['CatalogueReadyToGoRing']>, ParentType, ContextType, RequireFields<QuerycatalogueReadyToGoRingArgs, 'filter'>>;
  catalogueReadyToGoRingsAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueReadyToGoRingsAggregateArgs>>;
  catalogueReadyToGoRingsFilters?: Resolver<ResolversTypes['CatalogueReadyToGoRingFilters'], ParentType, ContextType, RequireFields<QuerycatalogueReadyToGoRingsFiltersArgs, 'input'>>;
  catalogueJewelleries?: Resolver<Array<ResolversTypes['CatalogueJewellery']>, ParentType, ContextType, Partial<QuerycatalogueJewelleriesArgs>>;
  catalogueJewellery?: Resolver<Maybe<ResolversTypes['CatalogueJewellery']>, ParentType, ContextType, RequireFields<QuerycatalogueJewelleryArgs, 'filter'>>;
  catalogueJewelleriesFilters?: Resolver<ResolversTypes['CatalogueJewelleriesFilters'], ParentType, ContextType, Partial<QuerycatalogueJewelleriesFiltersArgs>>;
  catalogueJewelleriesFiltersVariations?: Resolver<Array<ResolversTypes['CatalogueJewelleriesFiltersVariation']>, ParentType, ContextType>;
  catalogueJewelleriesAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueJewelleriesAggregateArgs>>;
  catalogueJewelleryNecklaces?: Resolver<Array<ResolversTypes['CatalogueJewelleryNecklace']>, ParentType, ContextType, Partial<QuerycatalogueJewelleryNecklacesArgs>>;
  catalogueJewelleryNecklace?: Resolver<Maybe<ResolversTypes['CatalogueJewelleryNecklace']>, ParentType, ContextType, RequireFields<QuerycatalogueJewelleryNecklaceArgs, 'filter'>>;
  catalogueJewelleryNecklacesFilters?: Resolver<ResolversTypes['CatalogueJewelleryNecklacesFilters'], ParentType, ContextType, Partial<QuerycatalogueJewelleryNecklacesFiltersArgs>>;
  catalogueJewelleryNecklacesFiltersVariations?: Resolver<Array<ResolversTypes['CatalogueJewelleriesNecklacesFiltersVariation']>, ParentType, ContextType>;
  catalogueJewelleryNecklacesAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueJewelleryNecklacesAggregateArgs>>;
  catalogueJewelleryEarrings?: Resolver<Array<ResolversTypes['CatalogueJewelleryEarrings']>, ParentType, ContextType, Partial<QuerycatalogueJewelleryEarringsArgs>>;
  catalogueJewelleryEarring?: Resolver<Maybe<ResolversTypes['CatalogueJewelleryEarrings']>, ParentType, ContextType, RequireFields<QuerycatalogueJewelleryEarringArgs, 'filter'>>;
  catalogueJewelleryEarringsFilters?: Resolver<ResolversTypes['CatalogueJewelleryEarringsFilters'], ParentType, ContextType, Partial<QuerycatalogueJewelleryEarringsFiltersArgs>>;
  catalogueJewelleryEarringsFiltersVariations?: Resolver<Array<ResolversTypes['CatalogueJewelleriesEarringsFiltersVariation']>, ParentType, ContextType>;
  catalogueJewelleryEarringsAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueJewelleryEarringsAggregateArgs>>;
  catalogueJewelleryBracelets?: Resolver<Array<ResolversTypes['CatalogueJewelleryBracelet']>, ParentType, ContextType, Partial<QuerycatalogueJewelleryBraceletsArgs>>;
  catalogueJewelleryBracelet?: Resolver<Maybe<ResolversTypes['CatalogueJewelleryBracelet']>, ParentType, ContextType, RequireFields<QuerycatalogueJewelleryBraceletArgs, 'filter'>>;
  catalogueJewelleryBraceletsFilters?: Resolver<ResolversTypes['CatalogueJewelleryBraceletsFilters'], ParentType, ContextType, Partial<QuerycatalogueJewelleryBraceletsFiltersArgs>>;
  catalogueJewelleryBraceletFiltersVariations?: Resolver<Array<ResolversTypes['CatalogueJewelleriesBraceletsFiltersVariation']>, ParentType, ContextType>;
  catalogueJewelleryBraceletsAggregate?: Resolver<ResolversTypes['CatalogueAggregate'], ParentType, ContextType, Partial<QuerycatalogueJewelleryBraceletsAggregateArgs>>;
  defaultRegion?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  defaultAlternateRegion?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  regions?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType, RequireFields<QueryregionArgs, 'code'>>;
  regionSuggest?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  deliveryDaysForBespokeEngagementRings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metals?: Resolver<Array<ResolversTypes['Metal']>, ParentType, ContextType>;
  convertMoney?: Resolver<Array<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<QueryconvertMoneyArgs, 'input'>>;
  stoneClarityBySystemCode?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType, RequireFields<QuerystoneClarityBySystemCodeArgs, 'systemCode'>>;
  stoneClaritiesBySystemCode?: Resolver<Array<ResolversTypes['StoneClarity']>, ParentType, ContextType, RequireFields<QuerystoneClaritiesBySystemCodeArgs, 'systemCodes'>>;
  stoneColorBySystemCode?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType, RequireFields<QuerystoneColorBySystemCodeArgs, 'systemCode'>>;
  stoneColorsBySystemCode?: Resolver<Array<ResolversTypes['StoneColor']>, ParentType, ContextType, RequireFields<QuerystoneColorsBySystemCodeArgs, 'systemCodes'>>;
  stoneCategoryBySystemCode?: Resolver<ResolversTypes['StoneCategory'], ParentType, ContextType, RequireFields<QuerystoneCategoryBySystemCodeArgs, 'systemCode'>>;
  stoneCategoriesBySystemCode?: Resolver<Array<ResolversTypes['StoneCategory']>, ParentType, ContextType, RequireFields<QuerystoneCategoriesBySystemCodeArgs, 'systemCodes'>>;
  stoneShapeBySystemCodes?: Resolver<Array<ResolversTypes['StoneShape']>, ParentType, ContextType, RequireFields<QuerystoneShapeBySystemCodesArgs, 'systemCodes'>>;
  stoneCutsBySystemCodes?: Resolver<Array<ResolversTypes['StoneCut']>, ParentType, ContextType, RequireFields<QuerystoneCutsBySystemCodesArgs, 'systemCodes'>>;
  stoneGradesBySystemCodes?: Resolver<Array<ResolversTypes['StoneGrade']>, ParentType, ContextType, RequireFields<QuerystoneGradesBySystemCodesArgs, 'systemCodes'>>;
  stoneFluorescencesBySystemCodes?: Resolver<Array<ResolversTypes['StoneFluorescence']>, ParentType, ContextType, RequireFields<QuerystoneFluorescencesBySystemCodesArgs, 'systemCodes'>>;
  stonePolishesBySystemCodes?: Resolver<Array<ResolversTypes['StonePolish']>, ParentType, ContextType, RequireFields<QuerystonePolishesBySystemCodesArgs, 'systemCodes'>>;
  stoneSymmetriesBySystemCodes?: Resolver<Array<ResolversTypes['StoneSymmetry']>, ParentType, ContextType, RequireFields<QuerystoneSymmetriesBySystemCodesArgs, 'systemCodes'>>;
  stoneColors?: Resolver<Array<ResolversTypes['StoneColor']>, ParentType, ContextType, Partial<QuerystoneColorsArgs>>;
  stoneClarities?: Resolver<Array<ResolversTypes['StoneClarity']>, ParentType, ContextType, Partial<QuerystoneClaritiesArgs>>;
  stoneShapes?: Resolver<Array<ResolversTypes['StoneShape']>, ParentType, ContextType, Partial<QuerystoneShapesArgs>>;
  stoneGrades?: Resolver<Array<ResolversTypes['StoneGrade']>, ParentType, ContextType, Partial<QuerystoneGradesArgs>>;
  stoneCrystals?: Resolver<Array<ResolversTypes['StoneCrystal']>, ParentType, ContextType, Partial<QuerystoneCrystalsArgs>>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageArgs, 'locale'>>;
  customerExists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QuerycustomerExistsArgs, 'email'>>;
  validateCustomerRegistrationInput?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryvalidateCustomerRegistrationInputArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  convertPriceBoundsForGems?: Resolver<ResolversTypes['GemsApiPriceBounds'], ParentType, ContextType, RequireFields<QueryconvertPriceBoundsForGemsArgs, 'input'>>;
  convertPriceBoundsForGemsMulti?: Resolver<Array<ResolversTypes['GemsApiPriceBounds']>, ParentType, ContextType, RequireFields<QueryconvertPriceBoundsForGemsMultiArgs, 'input'>>;
  calculateGemsApiStoneTotalSalePrices?: Resolver<Array<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<QuerycalculateGemsApiStoneTotalSalePricesArgs, 'input'>>;
  nonSkuLabGrownDiamonds?: Resolver<Array<ResolversTypes['NonSkuLabGrown']>, ParentType, ContextType, RequireFields<QuerynonSkuLabGrownDiamondsArgs, 'region' | 'currency'>>;
  nonSkuLabGrownDiamondsBounds?: Resolver<ResolversTypes['NonSkuLabGrownDiamondsBounds'], ParentType, ContextType>;
  nonSkuLabGrownDiamond?: Resolver<Maybe<ResolversTypes['NonSkuLabGrown']>, ParentType, ContextType, RequireFields<QuerynonSkuLabGrownDiamondArgs, 'filter'>>;
  nonSkuGemStones?: Resolver<Array<ResolversTypes['NonSkuGemstone']>, ParentType, ContextType, RequireFields<QuerynonSkuGemStonesArgs, 'region' | 'currency'>>;
  nonSkuGemStonesBounds?: Resolver<ResolversTypes['NonSkuGemstonesBounds'], ParentType, ContextType>;
  nonSkuGemStone?: Resolver<Maybe<ResolversTypes['NonSkuGemstone']>, ParentType, ContextType, RequireFields<QuerynonSkuGemStoneArgs, 'filter'>>;
  nonSkuLabGrownPricingCells?: Resolver<Array<ResolversTypes['NonSkuLabGrown']>, ParentType, ContextType, Partial<QuerynonSkuLabGrownPricingCellsArgs>>;
  nonSkuGemStonesPricingCells?: Resolver<Array<ResolversTypes['NonSkuGemstone']>, ParentType, ContextType, Partial<QuerynonSkuGemStonesPricingCellsArgs>>;
  nonSkuLabGrownShapeDimensions?: Resolver<Array<ResolversTypes['NonSkuLabGrownShapeDimension']>, ParentType, ContextType>;
  nonSkuLabGrownCaratDimensions?: Resolver<Array<ResolversTypes['NonSkuLabGrownCaratDimension']>, ParentType, ContextType>;
  nonSkuLabGrownGradeDimensions?: Resolver<Array<ResolversTypes['NonSkuLabGrownGradeDimension']>, ParentType, ContextType>;
  nonSkuGemstoneShapeDimensions?: Resolver<Array<ResolversTypes['NonSkuGemstoneShapeDimension']>, ParentType, ContextType>;
  nonSkuGemstoneGradeClarityDimensions?: Resolver<Array<ResolversTypes['NonSkuGemstoneGradeClarityDimension']>, ParentType, ContextType>;
  nonSkuGemstoneColorCrystalDimensions?: Resolver<Array<ResolversTypes['NonSkuGemstoneType']>, ParentType, ContextType>;
  nonSkuGemstoneCaratDimensions?: Resolver<Array<ResolversTypes['NonSkuGemstoneCaratDimension']>, ParentType, ContextType>;
  nonSkuGemstoneImages?: Resolver<Array<ResolversTypes['NonSkuGemstoneImage']>, ParentType, ContextType>;
  ringBuilder?: Resolver<ResolversTypes['RingBuilder'], ParentType, ContextType, Partial<QueryringBuilderArgs>>;
  searchEverywhere?: Resolver<ResolversTypes['SearchEverywhereResponse'], ParentType, ContextType, RequireFields<QuerysearchEverywhereArgs, 'query' | 'justMe'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createConsultationNewCustomer?: Resolver<ResolversTypes['BookingCreateConsultationNewCustomerResponse'], ParentType, ContextType, RequireFields<MutationcreateConsultationNewCustomerArgs, 'input' | 'customer'>>;
  createConsultationExistingCustomer?: Resolver<ResolversTypes['BookingCreateConsultationExistingCustomerResponse'], ParentType, ContextType, RequireFields<MutationcreateConsultationExistingCustomerArgs, 'input'>>;
  cancelConsultation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationcancelConsultationArgs, 'input'>>;
  createConsultationByConsultant?: Resolver<Maybe<ResolversTypes['BookingConsultation']>, ParentType, ContextType, RequireFields<MutationcreateConsultationByConsultantArgs, 'customer' | 'consultationPurpose' | 'consultationMethod' | 'autoAssignConsultant' | 'reassignOpportunity' | 'input'>>;
  updateConsultationByConsultant?: Resolver<Maybe<ResolversTypes['BookingConsultation']>, ParentType, ContextType, RequireFields<MutationupdateConsultationByConsultantArgs, 'id' | 'reassignOpportunity' | 'input'>>;
  applyTransitionToConsultationByConsultant?: Resolver<Maybe<ResolversTypes['BookingConsultation']>, ParentType, ContextType, RequireFields<MutationapplyTransitionToConsultationByConsultantArgs, 'id' | 'transition'>>;
  removeFromMyCart?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationremoveFromMyCartArgs, 'productId'>>;
  setOrderCollectFromShowroomInformation?: Resolver<ResolversTypes['SetDeliveryInformationResponse'], ParentType, ContextType, RequireFields<MutationsetOrderCollectFromShowroomInformationArgs, 'input'>>;
  setOrderDeliverToAddressInformation?: Resolver<ResolversTypes['SetDeliveryInformationResponse'], ParentType, ContextType, RequireFields<MutationsetOrderDeliverToAddressInformationArgs, 'input'>>;
  payViaNoPayment?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationpayViaNoPaymentArgs, 'orderId'>>;
  createAffirmTransaction?: Resolver<ResolversTypes['AffirmTransaction'], ParentType, ContextType, RequireFields<MutationcreateAffirmTransactionArgs, 'input'>>;
  payViaAffirm?: Resolver<ResolversTypes['AffirmPaymentResponse'], ParentType, ContextType, RequireFields<MutationpayViaAffirmArgs, 'input'>>;
  completeAffirmTransactionPostIframe?: Resolver<ResolversTypes['AffirmCompleteTransactionResponse'], ParentType, ContextType, RequireFields<MutationcompleteAffirmTransactionPostIframeArgs, 'input'>>;
  createAllocationTransaction?: Resolver<ResolversTypes['AllocationTransaction'], ParentType, ContextType, RequireFields<MutationcreateAllocationTransactionArgs, 'input'>>;
  payViaAllocation?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationpayViaAllocationArgs, 'allocationTransactionId'>>;
  createBankTransaction?: Resolver<ResolversTypes['BankTransaction'], ParentType, ContextType, RequireFields<MutationcreateBankTransactionArgs, 'orderId'>>;
  payViaBank?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationpayViaBankArgs, 'bankTransactionId'>>;
  createCheckoutcomTransaction?: Resolver<ResolversTypes['CreateCheckoutcomTransactionResponse'], ParentType, ContextType, RequireFields<MutationcreateCheckoutcomTransactionArgs, 'input'>>;
  payViaCheckoutcom?: Resolver<ResolversTypes['PayViaCheckoutcomResponse'], ParentType, ContextType, RequireFields<MutationpayViaCheckoutcomArgs, 'input'>>;
  completeCheckoutcomTransactionPost3ds?: Resolver<ResolversTypes['CompleteCheckoutcomTransactionPost3dsResponse'], ParentType, ContextType, RequireFields<MutationcompleteCheckoutcomTransactionPost3dsArgs, 'input'>>;
  createKlarnaTransaction?: Resolver<ResolversTypes['KlarnaTransaction'], ParentType, ContextType, RequireFields<MutationcreateKlarnaTransactionArgs, 'input'>>;
  payViaKlarna?: Resolver<ResolversTypes['KlarnaPaymentResponse'], ParentType, ContextType, RequireFields<MutationpayViaKlarnaArgs, 'input'>>;
  applyPromoCode?: Resolver<Maybe<ResolversTypes['PromoCodeApplicationResult']>, ParentType, ContextType, RequireFields<MutationapplyPromoCodeArgs, 'promoCode'>>;
  questionnaireCompleteExistingCustomer?: Resolver<ResolversTypes['QuestionnaireCompletedExistingCustomerResponse'], ParentType, ContextType, RequireFields<MutationquestionnaireCompleteExistingCustomerArgs, 'input'>>;
  questionnaireCompleteNewCustomer?: Resolver<ResolversTypes['QuestionnaireCompletedNewCustomerResponse'], ParentType, ContextType, RequireFields<MutationquestionnaireCompleteNewCustomerArgs, 'input' | 'customer'>>;
  magicLinkRequest?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmagicLinkRequestArgs, 'input'>>;
  magicLinkConsume?: Resolver<ResolversTypes['MagicLinkConsumeResponse'], ParentType, ContextType, RequireFields<MutationmagicLinkConsumeArgs, 'input'>>;
  createDesignInspiration?: Resolver<ResolversTypes['DesignInspiration'], ParentType, ContextType, RequireFields<MutationcreateDesignInspirationArgs, 'file'>>;
  loginWithGoogle?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationloginWithGoogleArgs, 'credentials'>>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationloginArgs, 'credentials'>>;
  autologin?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationautologinArgs, 'authToken'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationrefreshTokenArgs, 'token'>>;
  impersonate?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationimpersonateArgs, 'identifier'>>;
  createEnquiryExistingCustomer?: Resolver<ResolversTypes['EnquiryResponseExistingCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryExistingCustomerArgs, 'input'>>;
  createEnquiryNewCustomer?: Resolver<ResolversTypes['EnquiryResponseNewCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryNewCustomerArgs, 'input' | 'customer'>>;
  createEnquiryContactUsExistingCustomer?: Resolver<ResolversTypes['EnquiryResponseExistingCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryContactUsExistingCustomerArgs, 'input'>>;
  createEnquiryContactUsNewCustomer?: Resolver<ResolversTypes['EnquiryResponseNewCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryContactUsNewCustomerArgs, 'input' | 'customer'>>;
  createEnquiryCustomEngagementRingExistingCustomer?: Resolver<ResolversTypes['EnquiryResponseExistingCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryCustomEngagementRingExistingCustomerArgs, 'input'>>;
  createEnquiryCustomEngagementRingNewCustomer?: Resolver<ResolversTypes['EnquiryResponseNewCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryCustomEngagementRingNewCustomerArgs, 'input' | 'customer'>>;
  createEnquiryEngagementRingPreferAnotherShapeExistingCustomer?: Resolver<ResolversTypes['EnquiryResponseExistingCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryEngagementRingPreferAnotherShapeExistingCustomerArgs, 'input'>>;
  createEnquiryEngagementRingPreferAnotherShapeNewCustomer?: Resolver<ResolversTypes['EnquiryResponseNewCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryEngagementRingPreferAnotherShapeNewCustomerArgs, 'input' | 'customer'>>;
  createEnquiryDiamondSearchProductExistingCustomer?: Resolver<ResolversTypes['EnquiryResponseExistingCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryDiamondSearchProductExistingCustomerArgs, 'input'>>;
  createEnquiryDiamondSearchProductNewCustomer?: Resolver<ResolversTypes['EnquiryResponseNewCustomer'], ParentType, ContextType, RequireFields<MutationcreateEnquiryDiamondSearchProductNewCustomerArgs, 'input' | 'customer'>>;
  nonSkuLabGrownGradeDimensionDelete?: Resolver<ResolversTypes['NonSkuLabGrownGradeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownGradeDimensionDeleteArgs, 'id'>>;
  nonSkuLabGrownGradeDimensionCreate?: Resolver<ResolversTypes['NonSkuLabGrownGradeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownGradeDimensionCreateArgs, 'input'>>;
  nonSkuLabGrownShapeDimensionDelete?: Resolver<ResolversTypes['NonSkuLabGrownShapeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownShapeDimensionDeleteArgs, 'id'>>;
  nonSkuLabGrownShapeDimensionCreate?: Resolver<ResolversTypes['NonSkuLabGrownShapeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownShapeDimensionCreateArgs, 'input'>>;
  nonSkuLabGrownShapeDimensionUpdate?: Resolver<ResolversTypes['NonSkuLabGrownShapeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownShapeDimensionUpdateArgs, 'id' | 'input'>>;
  nonSkuLabGrownCaratDimensionDelete?: Resolver<ResolversTypes['NonSkuLabGrownCaratDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownCaratDimensionDeleteArgs, 'id'>>;
  nonSkuLabGrownCaratDimensionCreate?: Resolver<ResolversTypes['NonSkuLabGrownCaratDimension'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownCaratDimensionCreateArgs, 'input'>>;
  nonSkuLabGrownDiamondCreate?: Resolver<ResolversTypes['NonSkuLabGrown'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownDiamondCreateArgs, 'input'>>;
  nonSkuLabGrownDiamondDelete?: Resolver<ResolversTypes['NonSkuLabGrown'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownDiamondDeleteArgs, 'id'>>;
  nonSkuLabGrownDiamondDeleteImage?: Resolver<ResolversTypes['NonSkuLabGrown'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownDiamondDeleteImageArgs, 'id'>>;
  nonSkuLabGrownDiamondChangeImage?: Resolver<ResolversTypes['NonSkuLabGrown'], ParentType, ContextType, RequireFields<MutationnonSkuLabGrownDiamondChangeImageArgs, 'id' | 'image'>>;
  nonSkuGemstoneShapeDimensionDelete?: Resolver<ResolversTypes['NonSkuGemstoneShapeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneShapeDimensionDeleteArgs, 'id'>>;
  nonSkuGemstoneShapeDimensionCreate?: Resolver<ResolversTypes['NonSkuGemstoneShapeDimension'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneShapeDimensionCreateArgs, 'input'>>;
  nonSkuGemstoneGradeClarityDimensionDelete?: Resolver<ResolversTypes['NonSkuGemstoneGradeClarityDimension'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneGradeClarityDimensionDeleteArgs, 'id'>>;
  nonSkuGemstoneGradeClarityDimensionCreate?: Resolver<ResolversTypes['NonSkuGemstoneGradeClarityDimension'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneGradeClarityDimensionCreateArgs, 'input'>>;
  nonSkuGemstoneColorCrystalDimensionDelete?: Resolver<ResolversTypes['NonSkuGemstoneType'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneColorCrystalDimensionDeleteArgs, 'id'>>;
  nonSkuGemstoneColorCrystalDimensionCreate?: Resolver<ResolversTypes['NonSkuGemstoneType'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneColorCrystalDimensionCreateArgs, 'input'>>;
  nonSkuGemstoneCaratDimensionDelete?: Resolver<ResolversTypes['NonSkuGemstoneCaratDimension'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneCaratDimensionDeleteArgs, 'id'>>;
  nonSkuGemstoneCaratDimensionCreate?: Resolver<ResolversTypes['NonSkuGemstoneCaratDimension'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneCaratDimensionCreateArgs, 'input'>>;
  nonSkuGemStoneCreate?: Resolver<ResolversTypes['NonSkuGemstone'], ParentType, ContextType, RequireFields<MutationnonSkuGemStoneCreateArgs, 'input'>>;
  nonSkuGemStoneDelete?: Resolver<ResolversTypes['NonSkuGemstone'], ParentType, ContextType, RequireFields<MutationnonSkuGemStoneDeleteArgs, 'id'>>;
  nonSkuGemStoneChangeImage?: Resolver<ResolversTypes['NonSkuGemstone'], ParentType, ContextType, RequireFields<MutationnonSkuGemStoneChangeImageArgs, 'id' | 'image'>>;
  nonSkuGemStoneDeleteImage?: Resolver<ResolversTypes['NonSkuGemstone'], ParentType, ContextType, RequireFields<MutationnonSkuGemStoneDeleteImageArgs, 'id'>>;
  nonSkuGemstoneImageCreate?: Resolver<ResolversTypes['NonSkuGemstoneImage'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneImageCreateArgs, 'input'>>;
  nonSkuGemstoneImageUpdate?: Resolver<ResolversTypes['NonSkuGemstoneImage'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneImageUpdateArgs, 'id' | 'input'>>;
  nonSkuGemstoneImageDelete?: Resolver<ResolversTypes['NonSkuGemstoneImage'], ParentType, ContextType, RequireFields<MutationnonSkuGemstoneImageDeleteArgs, 'id'>>;
  designStudioProductEngagementRingUpdate?: Resolver<ResolversTypes['DesignStudioProductEngagementRing'], ParentType, ContextType, RequireFields<MutationdesignStudioProductEngagementRingUpdateArgs, 'id' | 'input'>>;
  designStudioProductWeddingRingUpdate?: Resolver<ResolversTypes['DesignStudioProductWeddingRing'], ParentType, ContextType, RequireFields<MutationdesignStudioProductWeddingRingUpdateArgs, 'id' | 'input'>>;
  designStudioQuotationEngagementRingUpdate?: Resolver<ResolversTypes['QuotationEngagementRing'], ParentType, ContextType, RequireFields<MutationdesignStudioQuotationEngagementRingUpdateArgs, 'id' | 'input'>>;
  addDesignStudioProductToMyCart?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationaddDesignStudioProductToMyCartArgs, 'productId'>>;
  createDesignStudioProductAndAddToCartWeddingRingNewCustomer?: Resolver<ResolversTypes['CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse'], ParentType, ContextType, RequireFields<MutationcreateDesignStudioProductAndAddToCartWeddingRingNewCustomerArgs, 'input' | 'customer'>>;
  createDesignStudioProductAndAddToCartWeddingRingExistingCustomer?: Resolver<ResolversTypes['CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse'], ParentType, ContextType, RequireFields<MutationcreateDesignStudioProductAndAddToCartWeddingRingExistingCustomerArgs, 'input'>>;
  createDesignStudioProductAndAddToCartJewelleryNewCustomer?: Resolver<ResolversTypes['CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse'], ParentType, ContextType, RequireFields<MutationcreateDesignStudioProductAndAddToCartJewelleryNewCustomerArgs, 'input' | 'customer'>>;
  createDesignStudioProductAndAddToCartJewelleryExistingCustomer?: Resolver<ResolversTypes['CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse'], ParentType, ContextType, RequireFields<MutationcreateDesignStudioProductAndAddToCartJewelleryExistingCustomerArgs, 'input'>>;
  addToCartReadyToGoRingNewCustomer?: Resolver<ResolversTypes['AddToCartReadyToGoRingNewCustomerResponse'], ParentType, ContextType, RequireFields<MutationaddToCartReadyToGoRingNewCustomerArgs, 'input' | 'customer'>>;
  addToCartReadyToGoRingExistingCustomer?: Resolver<ResolversTypes['AddToCartReadyToGoRingExistingCustomerResponse'], ParentType, ContextType, RequireFields<MutationaddToCartReadyToGoRingExistingCustomerArgs, 'input'>>;
  ringBuilder?: Resolver<ResolversTypes['RingBuilder'], ParentType, ContextType, RequireFields<MutationringBuilderArgs, 'input'>>;
  ringBuilderResolveNewCustomer?: Resolver<ResolversTypes['RingBuilderResolvedNewCustomer'], ParentType, ContextType, RequireFields<MutationringBuilderResolveNewCustomerArgs, 'input' | 'customer'>>;
  ringBuilderResolveExistingCustomer?: Resolver<ResolversTypes['RingBuilderResolvedExistingCustomer'], ParentType, ContextType, RequireFields<MutationringBuilderResolveExistingCustomerArgs, 'input'>>;
  marketingData?: Resolver<ResolversTypes['MarketingDataResponse'], ParentType, ContextType, RequireFields<MutationmarketingDataArgs, 'input'>>;
}>;

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export type PhoneNumberTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PhoneNumberType'] = ResolversParentTypes['PhoneNumberType']> = ResolversObject<{
  e164?: Resolver<ResolversTypes['PhoneNumber'], ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationalNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<PhoneNumberTypeformattedArgs, 'format'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UriScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Uri'], any> {
  name: 'Uri';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['ImageSrc']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType, RequireFields<AssetsizeArgs, 'name'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenericImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GenericImage'] = ResolversParentTypes['GenericImage']> = ResolversObject<{
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['ImageSrc']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType, RequireFields<GenericImagesizeArgs, 'name'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageSizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImageSize'] = ResolversParentTypes['ImageSize']> = ResolversObject<{
  name?: Resolver<ResolversTypes['ImageSizeName'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['ImageSrc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageSrcResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImageSrc'] = ResolversParentTypes['ImageSrc']> = ResolversObject<{
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoPointResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GeoPoint'] = ResolversParentTypes['GeoPoint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CountryScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Country'], any> {
  name: 'Country';
}

export interface CountrySubdivisionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountrySubdivision'], any> {
  name: 'CountrySubdivision';
}

export type RegionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = ResolversObject<{
  code?: Resolver<ResolversTypes['RegionCode'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  locales?: Resolver<Array<ResolversTypes['Locale']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  representingCountry?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  vat?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryDateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DeliveryDate'] = ResolversParentTypes['DeliveryDate']> = ResolversObject<{
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  validUntil?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType>;
  promoCode?: Resolver<Maybe<ResolversTypes['PromoCode']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  placementDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  shippingAddress?: Resolver<ResolversTypes['OrderAddress'], ParentType, ContextType>;
  billingAddress?: Resolver<ResolversTypes['OrderAddress'], ParentType, ContextType>;
  availableShowroomsForCollection?: Resolver<Array<ResolversTypes['Showroom']>, ParentType, ContextType>;
  desiredDeliveryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  isAsarEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isShippingAddressReadonly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDeliveryConfirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paymentPlan?: Resolver<ResolversTypes['PaymentPlan'], ParentType, ContextType>;
  subtotalAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  prediscountSubtotalAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  prediscountTotalAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  savedAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  vatAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  salesTaxAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shippingAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  paidAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  remainingAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  paymentMethods?: Resolver<ResolversTypes['PaymentMethodContainer'], ParentType, ContextType>;
  transactions?: Resolver<Array<ResolversTypes['TransactionInterface']>, ParentType, ContextType>;
  shipmentTrackingInformation?: Resolver<Maybe<ResolversTypes['ShipmentTrackingInformation']>, ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType>;
  allowedWeekdays?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  disabledDates?: Resolver<Array<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderStatusResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderStatus'] = ResolversParentTypes['OrderStatus']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<OrderStatusnameArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentTrackingInformationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentTrackingInformation'] = ResolversParentTypes['ShipmentTrackingInformation']> = ResolversObject<{
  dispatchedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  shippingCompany?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackingNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackingUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionInterface'] = ResolversParentTypes['TransactionInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LegacyTransaction' | 'AffirmTransaction' | 'AllocationTransaction' | 'BankTransaction' | 'CheckoutcomTransaction' | 'KlarnaTransaction' | 'StripeTransaction', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
}>;

export type TransactionStatusResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionStatus'] = ResolversParentTypes['TransactionStatus']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['TransactionStatusCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<TransactionStatusnameArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LegacyTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LegacyTransaction'] = ResolversParentTypes['LegacyTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  paymentMethodName?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<LegacyTransactionpaymentMethodNameArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentMethodContainer'] = ResolversParentTypes['PaymentMethodContainer']> = ResolversObject<{
  noPayment?: Resolver<Maybe<ResolversTypes['NoPaymentMethod']>, ParentType, ContextType>;
  affirmPayment?: Resolver<Maybe<ResolversTypes['AffirmPaymentMethod']>, ParentType, ContextType>;
  allocationPayment?: Resolver<Maybe<ResolversTypes['AllocationPaymentMethod']>, ParentType, ContextType>;
  bankPayment?: Resolver<Maybe<ResolversTypes['BankPaymentMethod']>, ParentType, ContextType>;
  checkoutcomPayment?: Resolver<Maybe<ResolversTypes['CheckoutcomPaymentMethod']>, ParentType, ContextType>;
  klarnaPayment?: Resolver<Maybe<ResolversTypes['KlarnaPaymentMethod']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NoPaymentMethod'] = ResolversParentTypes['NoPaymentMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentPlanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentPlan'] = ResolversParentTypes['PaymentPlan']> = ResolversObject<{
  paid?: Resolver<Array<ResolversTypes['PaymentPlanPaidRecord']>, ParentType, ContextType>;
  current?: Resolver<Maybe<ResolversTypes['PaymentPlanUpcomingRecord']>, ParentType, ContextType>;
  upcoming?: Resolver<Array<ResolversTypes['PaymentPlanUpcomingRecord']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentPlanPaidRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentPlanPaidRecord'] = ResolversParentTypes['PaymentPlanPaidRecord']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  paidOn?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentPlanUpcomingRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentPlanUpcomingRecord'] = ResolversParentTypes['PaymentPlanUpcomingRecord']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prediscountTotalSaleAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalSaleAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  designStudioProduct?: Resolver<Maybe<ResolversTypes['DesignStudioProduct']>, ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['PhoneNumberType']>, ParentType, ContextType>;
  addressLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  subdivision?: Resolver<Maybe<ResolversTypes['CountrySubdivision']>, ParentType, ContextType>;
  deliveryInstructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetDeliveryInformationResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetDeliveryInformationResponse'] = ResolversParentTypes['SetDeliveryInformationResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SetDeliveryInformationSuccessResponse' | 'SetDeliveryInformationFailureResponse', ParentType, ContextType>;
}>;

export type SetDeliveryInformationFailureResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetDeliveryInformationFailureResponse'] = ResolversParentTypes['SetDeliveryInformationFailureResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['SetDeliveryInformationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetDeliveryInformationErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetDeliveryInformationError'] = ResolversParentTypes['SetDeliveryInformationError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OrderAlreadyCompletedError', ParentType, ContextType>;
}>;

export type SetDeliveryInformationSuccessResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetDeliveryInformationSuccessResponse'] = ResolversParentTypes['SetDeliveryInformationSuccessResponse']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAlreadyCompletedErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderAlreadyCompletedError'] = ResolversParentTypes['OrderAlreadyCompletedError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderEmptyErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderEmptyError'] = ResolversParentTypes['OrderEmptyError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentAmountInvalidErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentAmountInvalidError'] = ResolversParentTypes['PaymentAmountInvalidError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAddressNotConfirmedErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderAddressNotConfirmedError'] = ResolversParentTypes['OrderAddressNotConfirmedError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesiredDeliveryDateInvalidErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesiredDeliveryDateInvalidError'] = ResolversParentTypes['DesiredDeliveryDateInvalidError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodNotAllowedErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentMethodNotAllowedError'] = ResolversParentTypes['PaymentMethodNotAllowedError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvataxAddressInvalidErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AvataxAddressInvalidError'] = ResolversParentTypes['AvataxAddressInvalidError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffirmFinanceOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffirmFinanceOption'] = ResolversParentTypes['AffirmFinanceOption']> = ResolversObject<{
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  months?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perMonth?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffirmPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffirmPaymentMethod'] = ResolversParentTypes['AffirmPaymentMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scriptUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffirmTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffirmTransaction'] = ResolversParentTypes['AffirmTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  checkoutObject?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffirmPaymentResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffirmPaymentResponse'] = ResolversParentTypes['AffirmPaymentResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffirmCompleteTransactionResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffirmCompleteTransactionResponse'] = ResolversParentTypes['AffirmCompleteTransactionResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AllocationPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AllocationPaymentMethod'] = ResolversParentTypes['AllocationPaymentMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxAmount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AllocationTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AllocationTransaction'] = ResolversParentTypes['AllocationTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BankPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BankPaymentMethod'] = ResolversParentTypes['BankPaymentMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BankTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BankTransaction'] = ResolversParentTypes['BankTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutcomPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckoutcomPaymentMethod'] = ResolversParentTypes['CheckoutcomPaymentMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  debugMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutcomTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckoutcomTransaction'] = ResolversParentTypes['CheckoutcomTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateCheckoutcomTransactionResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateCheckoutcomTransactionResponse'] = ResolversParentTypes['CreateCheckoutcomTransactionResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateCheckoutcomTransactionSuccessResponse' | 'CreateCheckoutcomTransactionFailureResponse', ParentType, ContextType>;
}>;

export type CreateCheckoutcomTransactionFailureResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateCheckoutcomTransactionFailureResponse'] = ResolversParentTypes['CreateCheckoutcomTransactionFailureResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['CreateCheckoutcomTransactionError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateCheckoutcomTransactionErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateCheckoutcomTransactionError'] = ResolversParentTypes['CreateCheckoutcomTransactionError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OrderAlreadyCompletedError' | 'PaymentAmountInvalidError' | 'OrderAddressNotConfirmedError' | 'DesiredDeliveryDateInvalidError' | 'AvataxAddressInvalidError' | 'OrderEmptyError' | 'PaymentMethodNotAllowedError', ParentType, ContextType>;
}>;

export type CreateCheckoutcomTransactionSuccessResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateCheckoutcomTransactionSuccessResponse'] = ResolversParentTypes['CreateCheckoutcomTransactionSuccessResponse']> = ResolversObject<{
  transaction?: Resolver<ResolversTypes['CheckoutcomTransaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayViaCheckoutcomResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayViaCheckoutcomResponse'] = ResolversParentTypes['PayViaCheckoutcomResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PayViaCheckoutcomSuccessResponse' | 'PayViaCheckoutcomFailureResponse', ParentType, ContextType>;
}>;

export type PayViaCheckoutcomFailureResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayViaCheckoutcomFailureResponse'] = ResolversParentTypes['PayViaCheckoutcomFailureResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['PayViaCheckoutcomError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayViaCheckoutcomErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayViaCheckoutcomError'] = ResolversParentTypes['PayViaCheckoutcomError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OrderAlreadyCompletedError' | 'PaymentAmountInvalidError' | 'DesiredDeliveryDateInvalidError' | 'CheckoutcomOperationDeclinedError', ParentType, ContextType>;
}>;

export type PayViaCheckoutcomSuccessResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayViaCheckoutcomSuccessResponse'] = ResolversParentTypes['PayViaCheckoutcomSuccessResponse']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  redirectUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompleteCheckoutcomTransactionPost3dsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsResponse'] = ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CompleteCheckoutcomTransactionPost3dsSuccessResponse' | 'CompleteCheckoutcomTransactionPost3dsFailureResponse', ParentType, ContextType>;
}>;

export type CompleteCheckoutcomTransactionPost3dsFailureResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsFailureResponse'] = ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsFailureResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['CompleteCheckoutcomTransactionPost3dsError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompleteCheckoutcomTransactionPost3dsErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsError'] = ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'OrderAlreadyCompletedError' | 'PaymentAmountInvalidError' | 'DesiredDeliveryDateInvalidError' | 'CheckoutcomOperationDeclinedError', ParentType, ContextType>;
}>;

export type CompleteCheckoutcomTransactionPost3dsSuccessResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsSuccessResponse'] = ResolversParentTypes['CompleteCheckoutcomTransactionPost3dsSuccessResponse']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckoutcomOperationDeclinedErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckoutcomOperationDeclinedError'] = ResolversParentTypes['CheckoutcomOperationDeclinedError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KlarnaFinanceOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlarnaFinanceOption'] = ResolversParentTypes['KlarnaFinanceOption']> = ResolversObject<{
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  months?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perMonth?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KlarnaPaymentMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlarnaPaymentMethod'] = ResolversParentTypes['KlarnaPaymentMethod']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KlarnaTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlarnaTransaction'] = ResolversParentTypes['KlarnaTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  sessionData?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KlarnaPaymentResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlarnaPaymentResponse'] = ResolversParentTypes['KlarnaPaymentResponse']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StripeTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StripeTransaction'] = ResolversParentTypes['StripeTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Metal'] = ResolversParentTypes['Metal']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['MetalCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  element?: Resolver<ResolversTypes['MetalElement'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['MetalColor']>, ParentType, ContextType>;
  karat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  millesimalFineness?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetalColorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetalColor'] = ResolversParentTypes['MetalColor']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['MetalColorCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['MetalColorTranslation'], ParentType, ContextType, RequireFields<MetalColortranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetalColorTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetalColorTranslation'] = ResolversParentTypes['MetalColorTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetalElementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetalElement'] = ResolversParentTypes['MetalElement']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['MetalElementCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['MetalElementTranslation'], ParentType, ContextType, RequireFields<MetalElementtranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetalElementTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetalElementTranslation'] = ResolversParentTypes['MetalElementTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export type MoneyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductLabelTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductLabelTranslation'] = ResolversParentTypes['ProductLabelTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EngagementRingStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EngagementRingStyleLabel'] = ResolversParentTypes['EngagementRingStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['EngagementRingStyleLabelCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<EngagementRingStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EngagementRingDesignStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EngagementRingDesignStyleLabel'] = ResolversParentTypes['EngagementRingDesignStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['EngagementRingDesignStyleLabelCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<EngagementRingDesignStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EngagementRingDesignFeatureLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EngagementRingDesignFeatureLabel'] = ResolversParentTypes['EngagementRingDesignFeatureLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['EngagementRingDesignFeatureLabelCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<EngagementRingDesignFeatureLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeddingRingCategoryLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WeddingRingCategoryLabel'] = ResolversParentTypes['WeddingRingCategoryLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['WeddingRingCategoryLabelCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<WeddingRingCategoryLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeddingRingStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WeddingRingStyleLabel'] = ResolversParentTypes['WeddingRingStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['WeddingRingStyleLabelCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<WeddingRingStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JewelleryDesignStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JewelleryDesignStyleLabel'] = ResolversParentTypes['JewelleryDesignStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['JewelleryDesignStyle'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<JewelleryDesignStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JewelleryDesignFeatureLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JewelleryDesignFeatureLabel'] = ResolversParentTypes['JewelleryDesignFeatureLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['JewelleryDesignFeature'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<JewelleryDesignFeatureLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JewelleryGemstoneLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JewelleryGemstoneLabel'] = ResolversParentTypes['JewelleryGemstoneLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['JewelleryGemstoneCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<JewelleryGemstoneLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JewelleryBraceletProductStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JewelleryBraceletProductStyleLabel'] = ResolversParentTypes['JewelleryBraceletProductStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['JewelleryBraceletProductStyle'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<JewelleryBraceletProductStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JewelleryEarringsProductStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JewelleryEarringsProductStyleLabel'] = ResolversParentTypes['JewelleryEarringsProductStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['JewelleryEarringsProductStyle'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<JewelleryEarringsProductStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JewelleryNecklaceProductStyleLabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JewelleryNecklaceProductStyleLabel'] = ResolversParentTypes['JewelleryNecklaceProductStyleLabel']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['JewelleryNecklaceProductStyle'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ProductLabelTranslation'], ParentType, ContextType, RequireFields<JewelleryNecklaceProductStyleLabeltranslationArgs, 'locale'>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromoCodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PromoCode'] = ResolversParentTypes['PromoCode']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromoCodeApplicationResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PromoCodeApplicationResult'] = ResolversParentTypes['PromoCodeApplicationResult']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['PromoCodeApplicationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireCompletedNewCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireCompletedNewCustomerResponse'] = ResolversParentTypes['QuestionnaireCompletedNewCustomerResponse']> = ResolversObject<{
  questionnaire?: Resolver<ResolversTypes['QuestionnaireCompletedQuestionnaire'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireCompletedExistingCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireCompletedExistingCustomerResponse'] = ResolversParentTypes['QuestionnaireCompletedExistingCustomerResponse']> = ResolversObject<{
  questionnaire?: Resolver<ResolversTypes['QuestionnaireCompletedQuestionnaire'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionSnapshot'] = ResolversParentTypes['QuestionnaireQuestionSnapshot']> = ResolversObject<{
  referenceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireCompletedQuestionnaireResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireCompletedQuestionnaire'] = ResolversParentTypes['QuestionnaireCompletedQuestionnaire']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referenceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['QuestionnaireType'], ParentType, ContextType>;
  steps?: Resolver<Array<ResolversTypes['QuestionnaireCompletedQuestionnaireStepSnapshot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireCompletedQuestionnaireStepSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireCompletedQuestionnaireStepSnapshot'] = ResolversParentTypes['QuestionnaireCompletedQuestionnaireStepSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answers?: Resolver<Array<ResolversTypes['QuestionnaireAnswer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireAnswerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireAnswer'] = ResolversParentTypes['QuestionnaireAnswer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'QuestionnaireQuestionAnswerText' | 'QuestionnaireQuestionAnswerSingleChoice' | 'QuestionnaireQuestionAnswerMultiChoice' | 'QuestionnaireQuestionAnswerNumber', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['QuestionnaireQuestionSnapshot'], ParentType, ContextType>;
}>;

export type QuestionnaireQuestionAnswerTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionAnswerText'] = ResolversParentTypes['QuestionnaireQuestionAnswerText']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['QuestionnaireQuestionSnapshot'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionAnswerSingleChoiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionAnswerSingleChoice'] = ResolversParentTypes['QuestionnaireQuestionAnswerSingleChoice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['QuestionnaireQuestionSnapshot'], ParentType, ContextType>;
  choice?: Resolver<ResolversTypes['QuestionnaireQuestionChoiceOptionSnapshot'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionAnswerMultiChoiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionAnswerMultiChoice'] = ResolversParentTypes['QuestionnaireQuestionAnswerMultiChoice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['QuestionnaireQuestionSnapshot'], ParentType, ContextType>;
  choices?: Resolver<Array<ResolversTypes['QuestionnaireQuestionChoiceOptionSnapshot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionAnswerNumberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionAnswerNumber'] = ResolversParentTypes['QuestionnaireQuestionAnswerNumber']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['QuestionnaireQuestionSnapshot'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionChoiceOptionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionChoiceOptionSnapshot'] = ResolversParentTypes['QuestionnaireQuestionChoiceOptionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referenceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layout?: Resolver<ResolversTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshot'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard'] = ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard']> = ResolversObject<{
  backgroundColor?: Resolver<ResolversTypes['QuestionnaireBackgroundColor'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotImage'] = ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotImage']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCardResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard'] = ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotText'] = ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshotText']> = ResolversObject<{
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionnaireQuestionChoiceOptionLayoutSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshot'] = ResolversParentTypes['QuestionnaireQuestionChoiceOptionLayoutSnapshot']> = ResolversObject<{
  __resolveType: TypeResolveFn<'QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard' | 'QuestionnaireQuestionChoiceOptionLayoutSnapshotImage' | 'QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard' | 'QuestionnaireQuestionChoiceOptionLayoutSnapshotText', ParentType, ContextType>;
}>;

export type ShowroomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Showroom'] = ResolversParentTypes['Showroom']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['ShowroomTranslation'], ParentType, ContextType, RequireFields<ShowroomtranslationArgs, 'locale'>>;
  location?: Resolver<ResolversTypes['ShowroomLocation'], ParentType, ContextType>;
  isAccessible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShowroomTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShowroomTranslation'] = ResolversParentTypes['ShowroomTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShowroomLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShowroomLocation'] = ResolversParentTypes['ShowroomLocation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  subdivision?: Resolver<Maybe<ResolversTypes['CountrySubdivision']>, ParentType, ContextType>;
  geoLocation?: Resolver<Maybe<ResolversTypes['GeoPoint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stone'] = ResolversParentTypes['Stone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  crystal?: Resolver<Maybe<ResolversTypes['StoneCrystal']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['StoneColor']>, ParentType, ContextType>;
  colorGrade?: Resolver<Maybe<ResolversTypes['StoneGrade']>, ParentType, ContextType>;
  cut?: Resolver<Maybe<ResolversTypes['StoneCut']>, ParentType, ContextType>;
  polish?: Resolver<Maybe<ResolversTypes['StonePolish']>, ParentType, ContextType>;
  symmetry?: Resolver<Maybe<ResolversTypes['StoneSymmetry']>, ParentType, ContextType>;
  fluorescence?: Resolver<Maybe<ResolversTypes['StoneFluorescence']>, ParentType, ContextType>;
  clarity?: Resolver<Maybe<ResolversTypes['StoneClarity']>, ParentType, ContextType>;
  shape?: Resolver<Maybe<ResolversTypes['StoneShape']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  ratio?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  tablePercent?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  depthPercent?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  measurements?: Resolver<ResolversTypes['StoneMeasurements'], ParentType, ContextType>;
  certificate?: Resolver<Maybe<ResolversTypes['StoneCertificate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCertificateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCertificate'] = ResolversParentTypes['StoneCertificate']> = ResolversObject<{
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['Uri'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneMeasurementsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneMeasurements'] = ResolversParentTypes['StoneMeasurements']> = ResolversObject<{
  width?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StonePolishResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StonePolish'] = ResolversParentTypes['StonePolish']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StonePolishCode'], ParentType, ContextType>;
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StonePolishTranslation'], ParentType, ContextType, RequireFields<StonePolishtranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StonePolishTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StonePolishTranslation'] = ResolversParentTypes['StonePolishTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneSymmetryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneSymmetry'] = ResolversParentTypes['StoneSymmetry']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneSymmetryCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneSymmetryTranslation'], ParentType, ContextType, RequireFields<StoneSymmetrytranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneSymmetryTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneSymmetryTranslation'] = ResolversParentTypes['StoneSymmetryTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneFluorescenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneFluorescence'] = ResolversParentTypes['StoneFluorescence']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneFluorescenceCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneFluorescenceTranslation'], ParentType, ContextType, RequireFields<StoneFluorescencetranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneFluorescenceTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneFluorescenceTranslation'] = ResolversParentTypes['StoneFluorescenceTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneShapeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneShape'] = ResolversParentTypes['StoneShape']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneShapeCode'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  samplePhoto?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneShapeTranslation'], ParentType, ContextType, RequireFields<StoneShapetranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneShapeTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneShapeTranslation'] = ResolversParentTypes['StoneShapeTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCrystalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCrystal'] = ResolversParentTypes['StoneCrystal']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneCrystalCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneCrystalTranslation'], ParentType, ContextType, RequireFields<StoneCrystaltranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCrystalTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCrystalTranslation'] = ResolversParentTypes['StoneCrystalTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneColorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneColor'] = ResolversParentTypes['StoneColor']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneColorCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneColorTranslation'], ParentType, ContextType, RequireFields<StoneColortranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneColorTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneColorTranslation'] = ResolversParentTypes['StoneColorTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCutResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCut'] = ResolversParentTypes['StoneCut']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneCutCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneCutTranslation'], ParentType, ContextType, RequireFields<StoneCuttranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCutTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCutTranslation'] = ResolversParentTypes['StoneCutTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneClarityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneClarity'] = ResolversParentTypes['StoneClarity']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneClarityCode'], ParentType, ContextType>;
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneClarityTranslation'], ParentType, ContextType, RequireFields<StoneClaritytranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneClarityTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneClarityTranslation'] = ResolversParentTypes['StoneClarityTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeleeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Melee'] = ResolversParentTypes['Melee']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['StoneCrystal'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  colors?: Resolver<Array<ResolversTypes['StoneColor']>, ParentType, ContextType>;
  clarities?: Resolver<Array<ResolversTypes['StoneClarity']>, ParentType, ContextType>;
  grade?: Resolver<Maybe<ResolversTypes['StoneGrade']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneGradeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneGrade'] = ResolversParentTypes['StoneGrade']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneGradeCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneGradeTranslation'], ParentType, ContextType, RequireFields<StoneGradetranslationArgs, 'locale'>>;
  category?: Resolver<ResolversTypes['StoneCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneGradeTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneGradeTranslation'] = ResolversParentTypes['StoneGradeTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCategory'] = ResolversParentTypes['StoneCategory']> = ResolversObject<{
  systemCode?: Resolver<ResolversTypes['StoneCategoryCode'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['StoneCategoryTranslation'], ParentType, ContextType, RequireFields<StoneCategorytranslationArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneCategoryTranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneCategoryTranslation'] = ResolversParentTypes['StoneCategoryTranslation']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export type LanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Translation'] = ResolversParentTypes['Translation']> = ResolversObject<{
  token?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignInspirationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignInspiration'] = ResolversParentTypes['DesignInspiration']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  disabledThirdPartyCookies?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  designInspiration?: Resolver<Maybe<ResolversTypes['DesignInspiration']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ordersByConsultationPurpose?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<CustomerordersByConsultationPurposeArgs, 'purpose'>>;
  consultant?: Resolver<Maybe<ResolversTypes['Consultant']>, ParentType, ContextType>;
  cart?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<CustomerorderArgs, 'id'>>;
  questionnaireByType?: Resolver<Maybe<ResolversTypes['QuestionnaireCompletedQuestionnaire']>, ParentType, ContextType, RequireFields<CustomerquestionnaireByTypeArgs, 'type'>>;
  enquiries?: Resolver<Array<ResolversTypes['Enquiry']>, ParentType, ContextType>;
  designStudioProducts?: Resolver<Array<ResolversTypes['DesignStudioProduct']>, ParentType, ContextType>;
  designStudioProduct?: Resolver<Maybe<ResolversTypes['DesignStudioProduct']>, ParentType, ContextType, RequireFields<CustomerdesignStudioProductArgs, 'id'>>;
  engagementRingRecommendations?: Resolver<Maybe<ResolversTypes['UserCustomerEngagementRingRecommendations']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['PhoneNumberType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MagicLinkConsumeSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MagicLinkConsumeSuccess'] = ResolversParentTypes['MagicLinkConsumeSuccess']> = ResolversObject<{
  login?: Resolver<ResolversTypes['LoginResponseSuccess'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MagicLinkConsumeErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MagicLinkConsumeError'] = ResolversParentTypes['MagicLinkConsumeError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MagicLinkConsumeResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MagicLinkConsumeResponse'] = ResolversParentTypes['MagicLinkConsumeResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MagicLinkConsumeSuccess' | 'MagicLinkConsumeError', ParentType, ContextType>;
}>;

export type CustomerRegistrationResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerRegistrationResponse'] = ResolversParentTypes['CustomerRegistrationResponse']> = ResolversObject<{
  login?: Resolver<Maybe<ResolversTypes['LoginResponseSuccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Email'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isConsultant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LoginResponseSuccess' | 'LoginResponseFailure', ParentType, ContextType>;
}>;

export type LoginResponseFailureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoginResponseFailure'] = ResolversParentTypes['LoginResponseFailure']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<LoginResponseFailuremessageArgs, 'locale'>>;
  code?: Resolver<ResolversTypes['LoginResponseErrorCode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResponseSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoginResponseSuccess'] = ResolversParentTypes['LoginResponseSuccess']> = ResolversObject<{
  jwt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnquiryResponseExistingCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnquiryResponseExistingCustomer'] = ResolversParentTypes['EnquiryResponseExistingCustomer']> = ResolversObject<{
  marketingCloudForm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnquiryResponseNewCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnquiryResponseNewCustomer'] = ResolversParentTypes['EnquiryResponseNewCustomer']> = ResolversObject<{
  customer?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  marketingCloudForm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnquiryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Enquiry'] = ResolversParentTypes['Enquiry']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EnquiryConsultation' | 'EnquiryWeddingRingAddToCart' | 'EnquiryEngagementRingAddToCart', ParentType, ContextType>;
}>;

export type EnquiryConsultationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnquiryConsultation'] = ResolversParentTypes['EnquiryConsultation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  consultation?: Resolver<ResolversTypes['BookingConsultation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnquiryWeddingRingAddToCartResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnquiryWeddingRingAddToCart'] = ResolversParentTypes['EnquiryWeddingRingAddToCart']> = ResolversObject<{
  product?: Resolver<ResolversTypes['DesignStudioProductWeddingRing'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnquiryEngagementRingAddToCartResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnquiryEngagementRingAddToCart'] = ResolversParentTypes['EnquiryEngagementRingAddToCart']> = ResolversObject<{
  product?: Resolver<ResolversTypes['DesignStudioProductEngagementRing'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GemsApiPriceBoundsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GemsApiPriceBounds'] = ResolversParentTypes['GemsApiPriceBounds']> = ResolversObject<{
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstoneImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstoneImage'] = ResolversParentTypes['NonSkuGemstoneImage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  shapeDimension?: Resolver<Maybe<ResolversTypes['NonSkuGemstoneShapeDimension']>, ParentType, ContextType>;
  colorCrystalDimension?: Resolver<Maybe<ResolversTypes['NonSkuGemstoneType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstoneCaratDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstoneCaratDimension'] = ResolversParentTypes['NonSkuGemstoneCaratDimension']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstoneShapeDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstoneShapeDimension'] = ResolversParentTypes['NonSkuGemstoneShapeDimension']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstoneGradeClarityDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstoneGradeClarityDimension'] = ResolversParentTypes['NonSkuGemstoneGradeClarityDimension']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['StoneGrade'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuImage'] = ResolversParentTypes['NonSkuImage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['Uri'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['ImageSrc']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType, RequireFields<NonSkuImagesizeArgs, 'name'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuLabGrownGradeDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuLabGrownGradeDimension'] = ResolversParentTypes['NonSkuLabGrownGradeDimension']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuLabGrownShapeDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuLabGrownShapeDimension'] = ResolversParentTypes['NonSkuLabGrownShapeDimension']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuLabGrownCaratDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuLabGrownCaratDimension'] = ResolversParentTypes['NonSkuLabGrownCaratDimension']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstonesBoundsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstonesBounds'] = ResolversParentTypes['NonSkuGemstonesBounds']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['NonSkuPriceRange']>, ParentType, ContextType, RequireFields<NonSkuGemstonesBoundspriceArgs, 'region' | 'currency'>>;
  caratWeight?: Resolver<ResolversTypes['NonSkuCaratWeightRange'], ParentType, ContextType>;
  shapes?: Resolver<Array<ResolversTypes['StoneShape']>, ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['NonSkuGemstoneType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstoneTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstoneType'] = ResolversParentTypes['NonSkuGemstoneType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['StoneCrystal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuPriceRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuPriceRange'] = ResolversParentTypes['NonSkuPriceRange']> = ResolversObject<{
  min?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuCaratWeightRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuCaratWeightRange'] = ResolversParentTypes['NonSkuCaratWeightRange']> = ResolversObject<{
  min?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuLabGrownDiamondsBoundsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuLabGrownDiamondsBounds'] = ResolversParentTypes['NonSkuLabGrownDiamondsBounds']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['NonSkuPriceRange']>, ParentType, ContextType, RequireFields<NonSkuLabGrownDiamondsBoundspriceArgs, 'region' | 'currency'>>;
  caratWeight?: Resolver<ResolversTypes['NonSkuCaratWeightRange'], ParentType, ContextType>;
  shapes?: Resolver<Array<ResolversTypes['StoneShape']>, ParentType, ContextType>;
  colors?: Resolver<Array<ResolversTypes['StoneColor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuInterface'] = ResolversParentTypes['NonSkuInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'HistoricalNonSkuLabGrown' | 'NonSkuLabGrown' | 'HistoricalNonSkuGemstone' | 'NonSkuGemstone', ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
}>;

export type HistoricalNonSkuResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoricalNonSku'] = ResolversParentTypes['HistoricalNonSku']> = ResolversObject<{
  __resolveType: TypeResolveFn<'HistoricalNonSkuLabGrown' | 'HistoricalNonSkuGemstone', ParentType, ContextType>;
}>;

export type NonSkuLabGrownInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuLabGrownInterface'] = ResolversParentTypes['NonSkuLabGrownInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'HistoricalNonSkuLabGrown' | 'NonSkuLabGrown', ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
}>;

export type NonSkuGemStoneInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemStoneInterface'] = ResolversParentTypes['NonSkuGemStoneInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'HistoricalNonSkuGemstone' | 'NonSkuGemstone', ParentType, ContextType>;
  cut?: Resolver<ResolversTypes['StoneCut'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['StoneCrystal'], ParentType, ContextType>;
  colorGrade?: Resolver<ResolversTypes['StoneGrade'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
}>;

export type HistoricalNonSkuLabGrownResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoricalNonSkuLabGrown'] = ResolversParentTypes['HistoricalNonSkuLabGrown']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<HistoricalNonSkuLabGrownsalePriceArgs, 'region' | 'currency'>>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuLabGrownResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuLabGrown'] = ResolversParentTypes['NonSkuLabGrown']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<NonSkuLabGrownsalePriceArgs, 'region' | 'currency'>>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  uniqueImage?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  sampleImage?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  shapeDimension?: Resolver<ResolversTypes['NonSkuLabGrownShapeDimension'], ParentType, ContextType>;
  gradeDimension?: Resolver<ResolversTypes['NonSkuLabGrownGradeDimension'], ParentType, ContextType>;
  caratDimension?: Resolver<ResolversTypes['NonSkuLabGrownCaratDimension'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoricalNonSkuGemstoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoricalNonSkuGemstone'] = ResolversParentTypes['HistoricalNonSkuGemstone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<HistoricalNonSkuGemstonesalePriceArgs, 'region' | 'currency'>>;
  cut?: Resolver<ResolversTypes['StoneCut'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['StoneCrystal'], ParentType, ContextType>;
  colorGrade?: Resolver<ResolversTypes['StoneGrade'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NonSkuGemstoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NonSkuGemstone'] = ResolversParentTypes['NonSkuGemstone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<NonSkuGemstonesalePriceArgs, 'region' | 'currency'>>;
  cut?: Resolver<ResolversTypes['StoneCut'], ParentType, ContextType>;
  caratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['StoneCrystal'], ParentType, ContextType>;
  colorGrade?: Resolver<ResolversTypes['StoneGrade'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  clarity?: Resolver<ResolversTypes['StoneClarity'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  uniqueImage?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  sampleImage?: Resolver<Maybe<ResolversTypes['NonSkuImage']>, ParentType, ContextType>;
  shapeDimension?: Resolver<ResolversTypes['NonSkuGemstoneShapeDimension'], ParentType, ContextType>;
  gradeClarityDimension?: Resolver<ResolversTypes['NonSkuGemstoneGradeClarityDimension'], ParentType, ContextType>;
  caratDimension?: Resolver<ResolversTypes['NonSkuGemstoneCaratDimension'], ParentType, ContextType>;
  colorCrystalDimension?: Resolver<ResolversTypes['NonSkuGemstoneType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProduct'] = ResolversParentTypes['DesignStudioProduct']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DesignStudioProductLooseStone' | 'DesignStudioProductAdditionalResize' | 'DesignStudioProductCustom' | 'DesignStudioProductGeneric' | 'DesignStudioProductEngagementRing' | 'DesignStudioProductWeddingRing', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['Quotation']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
}>;

export type DesignStudioProductLooseStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProductLooseStone'] = ResolversParentTypes['DesignStudioProductLooseStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['Quotation']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioProductAdditionalResizeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProductAdditionalResize'] = ResolversParentTypes['DesignStudioProductAdditionalResize']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['Quotation']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioProductCustomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProductCustom'] = ResolversParentTypes['DesignStudioProductCustom']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['Quotation']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioProductGenericResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProductGeneric'] = ResolversParentTypes['DesignStudioProductGeneric']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['Quotation']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioProductEngagementRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProductEngagementRing'] = ResolversParentTypes['DesignStudioProductEngagementRing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['QuotationEngagementRing']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['RingSizeOrRecommendedRingSize']>, ParentType, ContextType>;
  availableSizes?: Resolver<Array<ResolversTypes['RingSizeOrRecommendedRingSize']>, ParentType, ContextType>;
  engraving?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioMeleeItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioMeleeItem'] = ResolversParentTypes['DesignStudioMeleeItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  melee?: Resolver<ResolversTypes['Melee'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioProductWeddingRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioProductWeddingRing'] = ResolversParentTypes['DesignStudioProductWeddingRing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAutofinalizable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  quotations?: Resolver<Array<ResolversTypes['QuotationWeddingRing']>, ParentType, ContextType>;
  finalQuotation?: Resolver<Maybe<ResolversTypes['Quotation']>, ParentType, ContextType>;
  cantBeReturned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cantBeResized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['RingSizeOrRecommendedRingSize']>, ParentType, ContextType>;
  availableSizes?: Resolver<Array<ResolversTypes['RingSizeOrRecommendedRingSize']>, ParentType, ContextType>;
  engraving?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuotationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Quotation'] = ResolversParentTypes['Quotation']> = ResolversObject<{
  __resolveType: TypeResolveFn<'QuotationEngagementRing' | 'QuotationWeddingRing', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  customName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalUntil?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Uri']>, ParentType, ContextType>;
  totalSalePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  isVatApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSalesTaxApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  baseTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRecommended?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType>;
}>;

export type QuotationManualSurchargeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuotationManualSurcharge'] = ResolversParentTypes['QuotationManualSurcharge']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuotationPercentageSurchargeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuotationPercentageSurcharge'] = ResolversParentTypes['QuotationPercentageSurcharge']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuotationEngagementRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuotationEngagementRing'] = ResolversParentTypes['QuotationEngagementRing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  customName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalUntil?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Uri']>, ParentType, ContextType>;
  totalSalePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  isVatApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSalesTaxApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  baseTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRecommended?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mount?: Resolver<ResolversTypes['DesignStudioEngagementRingMount'], ParentType, ContextType>;
  centreStone?: Resolver<ResolversTypes['DesignStudioEngagementRingCentreStone'], ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioExternalSideStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioExternalSideStone'] = ResolversParentTypes['DesignStudioExternalSideStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  crystal?: Resolver<Maybe<ResolversTypes['StoneCrystal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioExternalCentreStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioExternalCentreStone'] = ResolversParentTypes['DesignStudioExternalCentreStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  crystal?: Resolver<Maybe<ResolversTypes['StoneCrystal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioInternalSideStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioInternalSideStone'] = ResolversParentTypes['DesignStudioInternalSideStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['DesignStudioSideStoneItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioSideStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioSideStone'] = ResolversParentTypes['DesignStudioSideStone']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DesignStudioInternalSideStone' | 'DesignStudioExternalSideStone', ParentType, ContextType>;
}>;

export type DesignStudioSideStoneItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioSideStoneItem'] = ResolversParentTypes['DesignStudioSideStoneItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Stone' | 'Melee', ParentType, ContextType>;
}>;

export type DesignStudioSignatureStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioSignatureStone'] = ResolversParentTypes['DesignStudioSignatureStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  melee?: Resolver<ResolversTypes['Melee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingMountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingMount'] = ResolversParentTypes['DesignStudioEngagementRingMount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  manualSurcharges?: Resolver<Array<ResolversTypes['QuotationManualSurcharge']>, ParentType, ContextType>;
  percentageSurcharge?: Resolver<Maybe<ResolversTypes['QuotationPercentageSurcharge']>, ParentType, ContextType>;
  metals?: Resolver<Array<ResolversTypes['Metal']>, ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sideStones?: Resolver<Array<ResolversTypes['DesignStudioSideStone']>, ParentType, ContextType>;
  melees?: Resolver<Array<ResolversTypes['DesignStudioMeleeItem']>, ParentType, ContextType>;
  signatureStones?: Resolver<Array<ResolversTypes['DesignStudioSignatureStone']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingCentreStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingCentreStone'] = ResolversParentTypes['DesignStudioEngagementRingCentreStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stone?: Resolver<ResolversTypes['DesignStudioCentreStone'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  manualSurcharges?: Resolver<Array<ResolversTypes['QuotationManualSurcharge']>, ParentType, ContextType>;
  percentageSurcharge?: Resolver<Maybe<ResolversTypes['QuotationPercentageSurcharge']>, ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioCentreStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioCentreStone'] = ResolversParentTypes['DesignStudioCentreStone']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DesignStudioInternalCentreStone' | 'DesignStudioExternalCentreStone', ParentType, ContextType>;
}>;

export type DesignStudioInternalCentreStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioInternalCentreStone'] = ResolversParentTypes['DesignStudioInternalCentreStone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nonSku?: Resolver<Maybe<ResolversTypes['HistoricalNonSku']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Stone']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuotationWeddingRingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuotationWeddingRing'] = ResolversParentTypes['QuotationWeddingRing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  customName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalUntil?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Uri']>, ParentType, ContextType>;
  totalSalePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  isVatApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSalesTaxApplicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  baseTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signatureStones?: Resolver<Array<ResolversTypes['DesignStudioSignatureStone']>, ParentType, ContextType>;
  manualSurcharges?: Resolver<Array<ResolversTypes['QuotationManualSurcharge']>, ParentType, ContextType>;
  percentageSurcharge?: Resolver<Maybe<ResolversTypes['QuotationPercentageSurcharge']>, ParentType, ContextType>;
  isRecommended?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metals?: Resolver<Array<ResolversTypes['Metal']>, ParentType, ContextType>;
  firstAvailableDeliveryDate?: Resolver<ResolversTypes['DeliveryDate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse'] = ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer', ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse'] = ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer', ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer'] = ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer'] = ResolversParentTypes['CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutJewelleryNewCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse'] = ResolversParentTypes['CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer', ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse'] = ResolversParentTypes['CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer', ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutJewellerySuccessNewCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer'] = ResolversParentTypes['CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer'] = ResolversParentTypes['CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutEngagementRingSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutEngagementRingSuccess'] = ResolversParentTypes['CatalogueDesignStudioCheckoutEngagementRingSuccess']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart' | 'CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio', ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio'] = ResolversParentTypes['CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio']> = ResolversObject<{
  product?: Resolver<ResolversTypes['DesignStudioProductEngagementRing'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCartResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart'] = ResolversParentTypes['CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  checkoutProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  designStudioProduct?: Resolver<ResolversTypes['DesignStudioProductEngagementRing'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddToCartReadyToGoRingNewCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddToCartReadyToGoRingNewCustomerResponse'] = ResolversParentTypes['AddToCartReadyToGoRingNewCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddToCartReadyToGoRingSuccessNewCustomer', ParentType, ContextType>;
}>;

export type AddToCartReadyToGoRingExistingCustomerResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddToCartReadyToGoRingExistingCustomerResponse'] = ResolversParentTypes['AddToCartReadyToGoRingExistingCustomerResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AddToCartReadyToGoRingSuccessExistingCustomer', ParentType, ContextType>;
}>;

export type AddToCartReadyToGoRingSuccessNewCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddToCartReadyToGoRingSuccessNewCustomer'] = ResolversParentTypes['AddToCartReadyToGoRingSuccessNewCustomer']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddToCartReadyToGoRingSuccessExistingCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddToCartReadyToGoRingSuccessExistingCustomer'] = ResolversParentTypes['AddToCartReadyToGoRingSuccessExistingCustomer']> = ResolversObject<{
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationNotFoundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationNotFound'] = ResolversParentTypes['StoneRecommendationNotFound']> = ResolversObject<{
  haveWithoutPricingRange?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationNonSkuLabGrownItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationNonSkuLabGrownItem'] = ResolversParentTypes['StoneRecommendationNonSkuLabGrownItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NonSkuLabGrown' | 'StoneRecommendationNotFound', ParentType, ContextType>;
}>;

export type StoneRecommendationNonSkuGemstoneItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationNonSkuGemstoneItem'] = ResolversParentTypes['StoneRecommendationNonSkuGemstoneItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NonSkuGemstone' | 'StoneRecommendationNotFound', ParentType, ContextType>;
}>;

export type StoneRecommendationNonSkuGemstoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationNonSkuGemstone'] = ResolversParentTypes['StoneRecommendationNonSkuGemstone']> = ResolversObject<{
  color?: Resolver<ResolversTypes['StoneColor'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['StoneRecommendationNonSkuGemstoneItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationsResponse'] = ResolversParentTypes['StoneRecommendationsResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'StoneRecommendationsResponseSuccess' | 'StoneRecommendationsResponseFailure', ParentType, ContextType>;
}>;

export type StoneRecommendationsResponseFailureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationsResponseFailure'] = ResolversParentTypes['StoneRecommendationsResponseFailure']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['StoneRecommendationsResponseError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationsResponseSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationsResponseSuccess'] = ResolversParentTypes['StoneRecommendationsResponseSuccess']> = ResolversObject<{
  priceBounds?: Resolver<ResolversTypes['StoneRecommendationsPriceRange'], ParentType, ContextType>;
  priceInitialValues?: Resolver<ResolversTypes['StoneRecommendationsPriceRange'], ParentType, ContextType>;
  naturalDiamondBestForBalanceFilters?: Resolver<ResolversTypes['StoneRecommendationsNaturalDiamondFilters'], ParentType, ContextType>;
  naturalDiamondBestForSizeFilters?: Resolver<ResolversTypes['StoneRecommendationsNaturalDiamondFilters'], ParentType, ContextType>;
  nonSkuLabGrownBestForPrice?: Resolver<ResolversTypes['StoneRecommendationNonSkuLabGrownItem'], ParentType, ContextType>;
  nonSkuLabGrownBestForSize?: Resolver<ResolversTypes['StoneRecommendationNonSkuLabGrownItem'], ParentType, ContextType>;
  nonSkuGemStones?: Resolver<Array<ResolversTypes['StoneRecommendationNonSkuGemstone']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationsPriceRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationsPriceRange'] = ResolversParentTypes['StoneRecommendationsPriceRange']> = ResolversObject<{
  min?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationsNaturalDiamondFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationsNaturalDiamondFilters'] = ResolversParentTypes['StoneRecommendationsNaturalDiamondFilters']> = ResolversObject<{
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  shape?: Resolver<ResolversTypes['StoneShape'], ParentType, ContextType>;
  minCaratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  maxCaratWeight?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  tablePercentRange?: Resolver<Maybe<ResolversTypes['StoneRecommendationsPercentRange']>, ParentType, ContextType>;
  depthPercentRange?: Resolver<Maybe<ResolversTypes['StoneRecommendationsPercentRange']>, ParentType, ContextType>;
  cuts?: Resolver<Array<ResolversTypes['StoneCut']>, ParentType, ContextType>;
  polishes?: Resolver<Array<ResolversTypes['StonePolish']>, ParentType, ContextType>;
  symmetries?: Resolver<Array<ResolversTypes['StoneSymmetry']>, ParentType, ContextType>;
  fluorescences?: Resolver<Array<ResolversTypes['StoneFluorescence']>, ParentType, ContextType>;
  clarities?: Resolver<Array<ResolversTypes['StoneClarity']>, ParentType, ContextType>;
  colors?: Resolver<Array<ResolversTypes['StoneColor']>, ParentType, ContextType>;
  priceMin?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<StoneRecommendationsNaturalDiamondFilterspriceMinArgs, 'currency'>>;
  priceMax?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<StoneRecommendationsNaturalDiamondFilterspriceMaxArgs, 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoneRecommendationsPercentRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StoneRecommendationsPercentRange'] = ResolversParentTypes['StoneRecommendationsPercentRange']> = ResolversObject<{
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioEngagementRingValidationResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioEngagementRingValidationResult'] = ResolversParentTypes['CatalogueDesignStudioEngagementRingValidationResult']> = ResolversObject<{
  engagementRing?: Resolver<Maybe<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType>;
  centreStone?: Resolver<Maybe<ResolversTypes['CatalogueDesignStudioEngagementRingCentreStone']>, ParentType, ContextType>;
  failure?: Resolver<Maybe<ResolversTypes['DesignStudioEngagementRingFailure']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogueDesignStudioEngagementRingCentreStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatalogueDesignStudioEngagementRingCentreStone'] = ResolversParentTypes['CatalogueDesignStudioEngagementRingCentreStone']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NonSkuGemstone' | 'NonSkuLabGrown' | 'GemsApiStone', ParentType, ContextType>;
}>;

export type GemsApiStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GemsApiStone'] = ResolversParentTypes['GemsApiStone']> = ResolversObject<{
  identifier?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingError'] = ResolversParentTypes['DesignStudioEngagementRingError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DesignStudioEngagementRingErrorShapeMismatch' | 'DesignStudioEngagementRingErrorMinCaratWeight' | 'DesignStudioEngagementRingErrorMaxCaratWeight', ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingErrorShapeMismatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingErrorShapeMismatch'] = ResolversParentTypes['DesignStudioEngagementRingErrorShapeMismatch']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<DesignStudioEngagementRingErrorShapeMismatchmessageArgs, 'locale'>>;
  matchingVariation?: Resolver<Maybe<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingErrorMinCaratWeightResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingErrorMinCaratWeight'] = ResolversParentTypes['DesignStudioEngagementRingErrorMinCaratWeight']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<DesignStudioEngagementRingErrorMinCaratWeightmessageArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingErrorMaxCaratWeightResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingErrorMaxCaratWeight'] = ResolversParentTypes['DesignStudioEngagementRingErrorMaxCaratWeight']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<DesignStudioEngagementRingErrorMaxCaratWeightmessageArgs, 'locale'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DesignStudioEngagementRingFailureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DesignStudioEngagementRingFailure'] = ResolversParentTypes['DesignStudioEngagementRingFailure']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['DesignStudioEngagementRingError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCustomerEngagementRingRecommendationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserCustomerEngagementRingRecommendations'] = ResolversParentTypes['UserCustomerEngagementRingRecommendations']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType, RequireFields<UserCustomerEngagementRingRecommendationsitemsArgs, 'page' | 'limit'>>;
  metal?: Resolver<Maybe<ResolversTypes['Metal']>, ParentType, ContextType>;
  ringStyle?: Resolver<Maybe<ResolversTypes['EngagementRingStyleLabel']>, ParentType, ContextType>;
  designStyle?: Resolver<Maybe<ResolversTypes['EngagementRingDesignStyleLabel']>, ParentType, ContextType>;
  designFeature?: Resolver<Maybe<ResolversTypes['EngagementRingDesignFeatureLabel']>, ParentType, ContextType>;
  shape?: Resolver<Maybe<ResolversTypes['StoneShape']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderResolvedNewCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderResolvedNewCustomer'] = ResolversParentTypes['RingBuilderResolvedNewCustomer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RingBuilderResolvedNewCustomerSuccess' | 'RingBuilderResolvedFailure', ParentType, ContextType>;
}>;

export type RingBuilderResolvedExistingCustomerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderResolvedExistingCustomer'] = ResolversParentTypes['RingBuilderResolvedExistingCustomer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RingBuilderResolvedExistingCustomerSuccess' | 'RingBuilderResolvedFailure', ParentType, ContextType>;
}>;

export type RingBuilderResolveResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderResolveResult'] = ResolversParentTypes['RingBuilderResolveResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart' | 'CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio' | 'DesignStudioEngagementRingFailure', ParentType, ContextType>;
}>;

export type RingBuilderResolvedFailureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderResolvedFailure'] = ResolversParentTypes['RingBuilderResolvedFailure']> = ResolversObject<{
  errors?: Resolver<Array<ResolversTypes['RingBuilderResolvedFailureError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderResolvedNewCustomerSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderResolvedNewCustomerSuccess'] = ResolversParentTypes['RingBuilderResolvedNewCustomerSuccess']> = ResolversObject<{
  customer?: Resolver<ResolversTypes['CustomerRegistrationResponse'], ParentType, ContextType>;
  ringBuilder?: Resolver<ResolversTypes['RingBuilder'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['RingBuilderResolveResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderResolvedExistingCustomerSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderResolvedExistingCustomerSuccess'] = ResolversParentTypes['RingBuilderResolvedExistingCustomerSuccess']> = ResolversObject<{
  ringBuilder?: Resolver<ResolversTypes['RingBuilder'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['RingBuilderResolveResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilder'] = ResolversParentTypes['RingBuilder']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position1?: Resolver<Maybe<ResolversTypes['RingBuilderFragment']>, ParentType, ContextType>;
  position2?: Resolver<Maybe<ResolversTypes['RingBuilderFragment']>, ParentType, ContextType>;
  totalSalePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<RingBuildertotalSalePriceArgs, 'region' | 'currency'>>;
  failure?: Resolver<Maybe<ResolversTypes['DesignStudioEngagementRingFailure']>, ParentType, ContextType>;
  financeOptionsAffirm?: Resolver<Maybe<ResolversTypes['AffirmFinanceOption']>, ParentType, ContextType, RequireFields<RingBuilderfinanceOptionsAffirmArgs, 'region' | 'currency'>>;
  financeOptionsKlarna?: Resolver<Maybe<ResolversTypes['KlarnaFinanceOption']>, ParentType, ContextType, RequireFields<RingBuilderfinanceOptionsKlarnaArgs, 'region' | 'currency'>>;
  stoneRecommendations?: Resolver<ResolversTypes['StoneRecommendationsResponse'], ParentType, ContextType, RequireFields<RingBuilderstoneRecommendationsArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderFragmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderFragment'] = ResolversParentTypes['RingBuilderFragment']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RingBuilderMountFragment' | 'RingBuilderCentreStoneFragment', ParentType, ContextType>;
}>;

export type RingBuilderMountFragmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderMountFragment'] = ResolversParentTypes['RingBuilderMountFragment']> = ResolversObject<{
  ring?: Resolver<Maybe<ResolversTypes['CatalogueEngagementRing']>, ParentType, ContextType>;
  signatureStone?: Resolver<Maybe<ResolversTypes['CatalogueEngagementRingSignatureStone']>, ParentType, ContextType>;
  totalSalePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<RingBuilderMountFragmenttotalSalePriceArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderCentreStoneFragmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderCentreStoneFragment'] = ResolversParentTypes['RingBuilderCentreStoneFragment']> = ResolversObject<{
  stone?: Resolver<Maybe<ResolversTypes['RingBuilderCentreStone']>, ParentType, ContextType>;
  totalSalePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType, RequireFields<RingBuilderCentreStoneFragmenttotalSalePriceArgs, 'region' | 'currency'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RingBuilderCentreStoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RingBuilderCentreStone'] = ResolversParentTypes['RingBuilderCentreStone']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NonSkuGemstone' | 'NonSkuLabGrown' | 'GemsApiStone', ParentType, ContextType>;
}>;

export type MarketingDataResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketingDataResponse'] = ResolversParentTypes['MarketingDataResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchEverywhereResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchEverywhereResponse'] = ResolversParentTypes['SearchEverywhereResponse']> = ResolversObject<{
  products?: Resolver<Array<ResolversTypes['DesignStudioProductGeneric']>, ParentType, ContextType>;
  customers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  RecommendedRingSize?: RecommendedRingSizeResolvers<ContextType>;
  RingSize?: RingSizeResolvers<ContextType>;
  RingSizeOrRecommendedRingSize?: RingSizeOrRecommendedRingSizeResolvers<ContextType>;
  BookingConsultationPurpose?: BookingConsultationPurposeResolvers<ContextType>;
  BookingConsultationType?: BookingConsultationTypeResolvers<ContextType>;
  BookingConsultationMethod?: BookingConsultationMethodResolvers<ContextType>;
  BookingConsultationComplexity?: BookingConsultationComplexityResolvers<ContextType>;
  BookingConsultationComplexityTranslation?: BookingConsultationComplexityTranslationResolvers<ContextType>;
  BookingConsultationSlotsResponse?: BookingConsultationSlotsResponseResolvers<ContextType>;
  BookingConsultationSlot?: BookingConsultationSlotResolvers<ContextType>;
  BookingCreateConsultationNewCustomerResponse?: BookingCreateConsultationNewCustomerResponseResolvers<ContextType>;
  BookingCreateConsultationExistingCustomerResponse?: BookingCreateConsultationExistingCustomerResponseResolvers<ContextType>;
  BookingCreateConsultationSuccessNewCustomer?: BookingCreateConsultationSuccessNewCustomerResolvers<ContextType>;
  BookingCreateConsultationSuccessExistingCustomer?: BookingCreateConsultationSuccessExistingCustomerResolvers<ContextType>;
  BookingCreateConsultationErrorNoAvailableConsultants?: BookingCreateConsultationErrorNoAvailableConsultantsResolvers<ContextType>;
  BookingConsultation?: BookingConsultationResolvers<ContextType>;
  BookingConsultationRoom?: BookingConsultationRoomResolvers<ContextType>;
  BookingInPersonConsultationRoom?: BookingInPersonConsultationRoomResolvers<ContextType>;
  BookingVirtualConsultationRoom?: BookingVirtualConsultationRoomResolvers<ContextType>;
  BookingConsultationAvailableDate?: BookingConsultationAvailableDateResolvers<ContextType>;
  BookingConsultationAvailableShowroom?: BookingConsultationAvailableShowroomResolvers<ContextType>;
  CatalogueImage?: CatalogueImageResolvers<ContextType>;
  CatalogueJewellery?: CatalogueJewelleryResolvers<ContextType>;
  CatalogueAggregate?: CatalogueAggregateResolvers<ContextType>;
  CatalogueJewelleriesFilters?: CatalogueJewelleriesFiltersResolvers<ContextType>;
  CatalogueJewelleriesFiltersVariation?: CatalogueJewelleriesFiltersVariationResolvers<ContextType>;
  CatalogueJewelleriesNecklacesFiltersVariation?: CatalogueJewelleriesNecklacesFiltersVariationResolvers<ContextType>;
  CatalogueJewelleriesEarringsFiltersVariation?: CatalogueJewelleriesEarringsFiltersVariationResolvers<ContextType>;
  CatalogueJewelleriesBraceletsFiltersVariation?: CatalogueJewelleriesBraceletsFiltersVariationResolvers<ContextType>;
  CatalogueJewelleryNecklacesFilters?: CatalogueJewelleryNecklacesFiltersResolvers<ContextType>;
  CatalogueJewelleryBraceletsFilters?: CatalogueJewelleryBraceletsFiltersResolvers<ContextType>;
  CatalogueJewelleryEarringsFilters?: CatalogueJewelleryEarringsFiltersResolvers<ContextType>;
  CatalogueFilterJewelleryDesignStyleLabel?: CatalogueFilterJewelleryDesignStyleLabelResolvers<ContextType>;
  CatalogueFilterJewelleryDesignFeatureLabel?: CatalogueFilterJewelleryDesignFeatureLabelResolvers<ContextType>;
  CatalogueFilterJewelleryGemstoneLabel?: CatalogueFilterJewelleryGemstoneLabelResolvers<ContextType>;
  CatalogueFilterJewelleryNecklaceProductStyleLabel?: CatalogueFilterJewelleryNecklaceProductStyleLabelResolvers<ContextType>;
  CatalogueFilterJewelleryBraceletProductStyleLabel?: CatalogueFilterJewelleryBraceletProductStyleLabelResolvers<ContextType>;
  CatalogueFilterJewelleryEarringsProductStyleLabel?: CatalogueFilterJewelleryEarringsProductStyleLabelResolvers<ContextType>;
  CatalogueJewelleryNecklace?: CatalogueJewelleryNecklaceResolvers<ContextType>;
  CatalogueJewelleryNecklaceTranslation?: CatalogueJewelleryNecklaceTranslationResolvers<ContextType>;
  CatalogueJewelleryEarrings?: CatalogueJewelleryEarringsResolvers<ContextType>;
  CatalogueJewelleryEarringsTranslation?: CatalogueJewelleryEarringsTranslationResolvers<ContextType>;
  CatalogueJewelleryBracelet?: CatalogueJewelleryBraceletResolvers<ContextType>;
  CatalogueJewelleryBraceletTranslation?: CatalogueJewelleryBraceletTranslationResolvers<ContextType>;
  CatalogueReadyToGoRingFilters?: CatalogueReadyToGoRingFiltersResolvers<ContextType>;
  CatalogueReadyToGoRing?: CatalogueReadyToGoRingResolvers<ContextType>;
  CatalogueReadyToGoRingTranslation?: CatalogueReadyToGoRingTranslationResolvers<ContextType>;
  CatalogueEngagementRingFilters?: CatalogueEngagementRingFiltersResolvers<ContextType>;
  CatalogueEngagementRingFiltersVariation?: CatalogueEngagementRingFiltersVariationResolvers<ContextType>;
  CatalogueWeddingRingFilters?: CatalogueWeddingRingFiltersResolvers<ContextType>;
  CatalogueWeddingRingFiltersVariation?: CatalogueWeddingRingFiltersVariationResolvers<ContextType>;
  CatalogueProduct?: CatalogueProductResolvers<ContextType>;
  SalePrice?: SalePriceResolvers<ContextType>;
  Gst?: GstResolvers<ContextType>;
  CatalogueVideo?: CatalogueVideoResolvers<ContextType>;
  CatalogueEngagementRing?: CatalogueEngagementRingResolvers<ContextType>;
  CatalogueEngagementRingSignatureStone?: CatalogueEngagementRingSignatureStoneResolvers<ContextType>;
  CatalogueEngagementRingCentreStoneConstraints?: CatalogueEngagementRingCentreStoneConstraintsResolvers<ContextType>;
  CatalogueEngagementRingCentreStoneWeightConstraint?: CatalogueEngagementRingCentreStoneWeightConstraintResolvers<ContextType>;
  CatalogueWeddingRing?: CatalogueWeddingRingResolvers<ContextType>;
  CatalogueBandType?: CatalogueBandTypeResolvers<ContextType>;
  CatalogueBandTypeTranslation?: CatalogueBandTypeTranslationResolvers<ContextType>;
  CatalogueMelee?: CatalogueMeleeResolvers<ContextType>;
  CatalogueEngagementRingTranslation?: CatalogueEngagementRingTranslationResolvers<ContextType>;
  CatalogueWeddingRingTranslation?: CatalogueWeddingRingTranslationResolvers<ContextType>;
  CataloguePriceRangeFilter?: CataloguePriceRangeFilterResolvers<ContextType>;
  CataloguePriceRangeBar?: CataloguePriceRangeBarResolvers<ContextType>;
  CataloguePriceRange?: CataloguePriceRangeResolvers<ContextType>;
  CatalogueFilterShapeItem?: CatalogueFilterShapeItemResolvers<ContextType>;
  CatalogueFilterMetalItem?: CatalogueFilterMetalItemResolvers<ContextType>;
  CatalogueFilterEngagementRingStylesItem?: CatalogueFilterEngagementRingStylesItemResolvers<ContextType>;
  CatalogueFilterEngagementRingDesingStyleItem?: CatalogueFilterEngagementRingDesingStyleItemResolvers<ContextType>;
  CatalogueFilterEngagementRingDesignFeatureItem?: CatalogueFilterEngagementRingDesignFeatureItemResolvers<ContextType>;
  CatalogueFilterWeddingRingCategoriesItem?: CatalogueFilterWeddingRingCategoriesItemResolvers<ContextType>;
  CatalogueFilterWeddingRingStylesItem?: CatalogueFilterWeddingRingStylesItemResolvers<ContextType>;
  Consultant?: ConsultantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Decimal?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  Email?: GraphQLScalarType;
  PhoneNumber?: GraphQLScalarType;
  PhoneNumberType?: PhoneNumberTypeResolvers<ContextType>;
  Uri?: GraphQLScalarType;
  Void?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  Asset?: AssetResolvers<ContextType>;
  GenericImage?: GenericImageResolvers<ContextType>;
  ImageSize?: ImageSizeResolvers<ContextType>;
  ImageSrc?: ImageSrcResolvers<ContextType>;
  GeoPoint?: GeoPointResolvers<ContextType>;
  Country?: GraphQLScalarType;
  CountrySubdivision?: GraphQLScalarType;
  Region?: RegionResolvers<ContextType>;
  DeliveryDate?: DeliveryDateResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderStatus?: OrderStatusResolvers<ContextType>;
  ShipmentTrackingInformation?: ShipmentTrackingInformationResolvers<ContextType>;
  TransactionInterface?: TransactionInterfaceResolvers<ContextType>;
  TransactionStatus?: TransactionStatusResolvers<ContextType>;
  LegacyTransaction?: LegacyTransactionResolvers<ContextType>;
  PaymentMethodContainer?: PaymentMethodContainerResolvers<ContextType>;
  NoPaymentMethod?: NoPaymentMethodResolvers<ContextType>;
  PaymentPlan?: PaymentPlanResolvers<ContextType>;
  PaymentPlanPaidRecord?: PaymentPlanPaidRecordResolvers<ContextType>;
  PaymentPlanUpcomingRecord?: PaymentPlanUpcomingRecordResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  SetDeliveryInformationResponse?: SetDeliveryInformationResponseResolvers<ContextType>;
  SetDeliveryInformationFailureResponse?: SetDeliveryInformationFailureResponseResolvers<ContextType>;
  SetDeliveryInformationError?: SetDeliveryInformationErrorResolvers<ContextType>;
  SetDeliveryInformationSuccessResponse?: SetDeliveryInformationSuccessResponseResolvers<ContextType>;
  OrderAlreadyCompletedError?: OrderAlreadyCompletedErrorResolvers<ContextType>;
  OrderEmptyError?: OrderEmptyErrorResolvers<ContextType>;
  PaymentAmountInvalidError?: PaymentAmountInvalidErrorResolvers<ContextType>;
  OrderAddressNotConfirmedError?: OrderAddressNotConfirmedErrorResolvers<ContextType>;
  DesiredDeliveryDateInvalidError?: DesiredDeliveryDateInvalidErrorResolvers<ContextType>;
  PaymentMethodNotAllowedError?: PaymentMethodNotAllowedErrorResolvers<ContextType>;
  AvataxAddressInvalidError?: AvataxAddressInvalidErrorResolvers<ContextType>;
  AffirmFinanceOption?: AffirmFinanceOptionResolvers<ContextType>;
  AffirmPaymentMethod?: AffirmPaymentMethodResolvers<ContextType>;
  AffirmTransaction?: AffirmTransactionResolvers<ContextType>;
  AffirmPaymentResponse?: AffirmPaymentResponseResolvers<ContextType>;
  AffirmCompleteTransactionResponse?: AffirmCompleteTransactionResponseResolvers<ContextType>;
  AllocationPaymentMethod?: AllocationPaymentMethodResolvers<ContextType>;
  AllocationTransaction?: AllocationTransactionResolvers<ContextType>;
  BankPaymentMethod?: BankPaymentMethodResolvers<ContextType>;
  BankTransaction?: BankTransactionResolvers<ContextType>;
  CheckoutcomPaymentMethod?: CheckoutcomPaymentMethodResolvers<ContextType>;
  CheckoutcomTransaction?: CheckoutcomTransactionResolvers<ContextType>;
  CreateCheckoutcomTransactionResponse?: CreateCheckoutcomTransactionResponseResolvers<ContextType>;
  CreateCheckoutcomTransactionFailureResponse?: CreateCheckoutcomTransactionFailureResponseResolvers<ContextType>;
  CreateCheckoutcomTransactionError?: CreateCheckoutcomTransactionErrorResolvers<ContextType>;
  CreateCheckoutcomTransactionSuccessResponse?: CreateCheckoutcomTransactionSuccessResponseResolvers<ContextType>;
  PayViaCheckoutcomResponse?: PayViaCheckoutcomResponseResolvers<ContextType>;
  PayViaCheckoutcomFailureResponse?: PayViaCheckoutcomFailureResponseResolvers<ContextType>;
  PayViaCheckoutcomError?: PayViaCheckoutcomErrorResolvers<ContextType>;
  PayViaCheckoutcomSuccessResponse?: PayViaCheckoutcomSuccessResponseResolvers<ContextType>;
  CompleteCheckoutcomTransactionPost3dsResponse?: CompleteCheckoutcomTransactionPost3dsResponseResolvers<ContextType>;
  CompleteCheckoutcomTransactionPost3dsFailureResponse?: CompleteCheckoutcomTransactionPost3dsFailureResponseResolvers<ContextType>;
  CompleteCheckoutcomTransactionPost3dsError?: CompleteCheckoutcomTransactionPost3dsErrorResolvers<ContextType>;
  CompleteCheckoutcomTransactionPost3dsSuccessResponse?: CompleteCheckoutcomTransactionPost3dsSuccessResponseResolvers<ContextType>;
  CheckoutcomOperationDeclinedError?: CheckoutcomOperationDeclinedErrorResolvers<ContextType>;
  KlarnaFinanceOption?: KlarnaFinanceOptionResolvers<ContextType>;
  KlarnaPaymentMethod?: KlarnaPaymentMethodResolvers<ContextType>;
  KlarnaTransaction?: KlarnaTransactionResolvers<ContextType>;
  KlarnaPaymentResponse?: KlarnaPaymentResponseResolvers<ContextType>;
  StripeTransaction?: StripeTransactionResolvers<ContextType>;
  Metal?: MetalResolvers<ContextType>;
  MetalColor?: MetalColorResolvers<ContextType>;
  MetalColorTranslation?: MetalColorTranslationResolvers<ContextType>;
  MetalElement?: MetalElementResolvers<ContextType>;
  MetalElementTranslation?: MetalElementTranslationResolvers<ContextType>;
  Currency?: GraphQLScalarType;
  Money?: MoneyResolvers<ContextType>;
  ProductLabelTranslation?: ProductLabelTranslationResolvers<ContextType>;
  EngagementRingStyleLabel?: EngagementRingStyleLabelResolvers<ContextType>;
  EngagementRingDesignStyleLabel?: EngagementRingDesignStyleLabelResolvers<ContextType>;
  EngagementRingDesignFeatureLabel?: EngagementRingDesignFeatureLabelResolvers<ContextType>;
  WeddingRingCategoryLabel?: WeddingRingCategoryLabelResolvers<ContextType>;
  WeddingRingStyleLabel?: WeddingRingStyleLabelResolvers<ContextType>;
  JewelleryDesignStyleLabel?: JewelleryDesignStyleLabelResolvers<ContextType>;
  JewelleryDesignFeatureLabel?: JewelleryDesignFeatureLabelResolvers<ContextType>;
  JewelleryGemstoneLabel?: JewelleryGemstoneLabelResolvers<ContextType>;
  JewelleryBraceletProductStyleLabel?: JewelleryBraceletProductStyleLabelResolvers<ContextType>;
  JewelleryEarringsProductStyleLabel?: JewelleryEarringsProductStyleLabelResolvers<ContextType>;
  JewelleryNecklaceProductStyleLabel?: JewelleryNecklaceProductStyleLabelResolvers<ContextType>;
  PromoCode?: PromoCodeResolvers<ContextType>;
  PromoCodeApplicationResult?: PromoCodeApplicationResultResolvers<ContextType>;
  QuestionnaireCompletedNewCustomerResponse?: QuestionnaireCompletedNewCustomerResponseResolvers<ContextType>;
  QuestionnaireCompletedExistingCustomerResponse?: QuestionnaireCompletedExistingCustomerResponseResolvers<ContextType>;
  QuestionnaireQuestionSnapshot?: QuestionnaireQuestionSnapshotResolvers<ContextType>;
  QuestionnaireCompletedQuestionnaire?: QuestionnaireCompletedQuestionnaireResolvers<ContextType>;
  QuestionnaireCompletedQuestionnaireStepSnapshot?: QuestionnaireCompletedQuestionnaireStepSnapshotResolvers<ContextType>;
  QuestionnaireAnswer?: QuestionnaireAnswerResolvers<ContextType>;
  QuestionnaireQuestionAnswerText?: QuestionnaireQuestionAnswerTextResolvers<ContextType>;
  QuestionnaireQuestionAnswerSingleChoice?: QuestionnaireQuestionAnswerSingleChoiceResolvers<ContextType>;
  QuestionnaireQuestionAnswerMultiChoice?: QuestionnaireQuestionAnswerMultiChoiceResolvers<ContextType>;
  QuestionnaireQuestionAnswerNumber?: QuestionnaireQuestionAnswerNumberResolvers<ContextType>;
  QuestionnaireQuestionChoiceOptionSnapshot?: QuestionnaireQuestionChoiceOptionSnapshotResolvers<ContextType>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCard?: QuestionnaireQuestionChoiceOptionLayoutSnapshotIconCardResolvers<ContextType>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotImage?: QuestionnaireQuestionChoiceOptionLayoutSnapshotImageResolvers<ContextType>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCard?: QuestionnaireQuestionChoiceOptionLayoutSnapshotImageCardResolvers<ContextType>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshotText?: QuestionnaireQuestionChoiceOptionLayoutSnapshotTextResolvers<ContextType>;
  QuestionnaireQuestionChoiceOptionLayoutSnapshot?: QuestionnaireQuestionChoiceOptionLayoutSnapshotResolvers<ContextType>;
  Showroom?: ShowroomResolvers<ContextType>;
  ShowroomTranslation?: ShowroomTranslationResolvers<ContextType>;
  ShowroomLocation?: ShowroomLocationResolvers<ContextType>;
  Stone?: StoneResolvers<ContextType>;
  StoneCertificate?: StoneCertificateResolvers<ContextType>;
  StoneMeasurements?: StoneMeasurementsResolvers<ContextType>;
  StonePolish?: StonePolishResolvers<ContextType>;
  StonePolishTranslation?: StonePolishTranslationResolvers<ContextType>;
  StoneSymmetry?: StoneSymmetryResolvers<ContextType>;
  StoneSymmetryTranslation?: StoneSymmetryTranslationResolvers<ContextType>;
  StoneFluorescence?: StoneFluorescenceResolvers<ContextType>;
  StoneFluorescenceTranslation?: StoneFluorescenceTranslationResolvers<ContextType>;
  StoneShape?: StoneShapeResolvers<ContextType>;
  StoneShapeTranslation?: StoneShapeTranslationResolvers<ContextType>;
  StoneCrystal?: StoneCrystalResolvers<ContextType>;
  StoneCrystalTranslation?: StoneCrystalTranslationResolvers<ContextType>;
  StoneColor?: StoneColorResolvers<ContextType>;
  StoneColorTranslation?: StoneColorTranslationResolvers<ContextType>;
  StoneCut?: StoneCutResolvers<ContextType>;
  StoneCutTranslation?: StoneCutTranslationResolvers<ContextType>;
  StoneClarity?: StoneClarityResolvers<ContextType>;
  StoneClarityTranslation?: StoneClarityTranslationResolvers<ContextType>;
  Melee?: MeleeResolvers<ContextType>;
  StoneGrade?: StoneGradeResolvers<ContextType>;
  StoneGradeTranslation?: StoneGradeTranslationResolvers<ContextType>;
  StoneCategory?: StoneCategoryResolvers<ContextType>;
  StoneCategoryTranslation?: StoneCategoryTranslationResolvers<ContextType>;
  Locale?: GraphQLScalarType;
  Language?: LanguageResolvers<ContextType>;
  Translation?: TranslationResolvers<ContextType>;
  DesignInspiration?: DesignInspirationResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  MagicLinkConsumeSuccess?: MagicLinkConsumeSuccessResolvers<ContextType>;
  MagicLinkConsumeError?: MagicLinkConsumeErrorResolvers<ContextType>;
  MagicLinkConsumeResponse?: MagicLinkConsumeResponseResolvers<ContextType>;
  CustomerRegistrationResponse?: CustomerRegistrationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  LoginResponseFailure?: LoginResponseFailureResolvers<ContextType>;
  LoginResponseSuccess?: LoginResponseSuccessResolvers<ContextType>;
  EnquiryResponseExistingCustomer?: EnquiryResponseExistingCustomerResolvers<ContextType>;
  EnquiryResponseNewCustomer?: EnquiryResponseNewCustomerResolvers<ContextType>;
  Enquiry?: EnquiryResolvers<ContextType>;
  EnquiryConsultation?: EnquiryConsultationResolvers<ContextType>;
  EnquiryWeddingRingAddToCart?: EnquiryWeddingRingAddToCartResolvers<ContextType>;
  EnquiryEngagementRingAddToCart?: EnquiryEngagementRingAddToCartResolvers<ContextType>;
  GemsApiPriceBounds?: GemsApiPriceBoundsResolvers<ContextType>;
  NonSkuGemstoneImage?: NonSkuGemstoneImageResolvers<ContextType>;
  NonSkuGemstoneCaratDimension?: NonSkuGemstoneCaratDimensionResolvers<ContextType>;
  NonSkuGemstoneShapeDimension?: NonSkuGemstoneShapeDimensionResolvers<ContextType>;
  NonSkuGemstoneGradeClarityDimension?: NonSkuGemstoneGradeClarityDimensionResolvers<ContextType>;
  NonSkuImage?: NonSkuImageResolvers<ContextType>;
  NonSkuLabGrownGradeDimension?: NonSkuLabGrownGradeDimensionResolvers<ContextType>;
  NonSkuLabGrownShapeDimension?: NonSkuLabGrownShapeDimensionResolvers<ContextType>;
  NonSkuLabGrownCaratDimension?: NonSkuLabGrownCaratDimensionResolvers<ContextType>;
  NonSkuGemstonesBounds?: NonSkuGemstonesBoundsResolvers<ContextType>;
  NonSkuGemstoneType?: NonSkuGemstoneTypeResolvers<ContextType>;
  NonSkuPriceRange?: NonSkuPriceRangeResolvers<ContextType>;
  NonSkuCaratWeightRange?: NonSkuCaratWeightRangeResolvers<ContextType>;
  NonSkuLabGrownDiamondsBounds?: NonSkuLabGrownDiamondsBoundsResolvers<ContextType>;
  NonSkuInterface?: NonSkuInterfaceResolvers<ContextType>;
  HistoricalNonSku?: HistoricalNonSkuResolvers<ContextType>;
  NonSkuLabGrownInterface?: NonSkuLabGrownInterfaceResolvers<ContextType>;
  NonSkuGemStoneInterface?: NonSkuGemStoneInterfaceResolvers<ContextType>;
  HistoricalNonSkuLabGrown?: HistoricalNonSkuLabGrownResolvers<ContextType>;
  NonSkuLabGrown?: NonSkuLabGrownResolvers<ContextType>;
  HistoricalNonSkuGemstone?: HistoricalNonSkuGemstoneResolvers<ContextType>;
  NonSkuGemstone?: NonSkuGemstoneResolvers<ContextType>;
  DesignStudioProduct?: DesignStudioProductResolvers<ContextType>;
  DesignStudioProductLooseStone?: DesignStudioProductLooseStoneResolvers<ContextType>;
  DesignStudioProductAdditionalResize?: DesignStudioProductAdditionalResizeResolvers<ContextType>;
  DesignStudioProductCustom?: DesignStudioProductCustomResolvers<ContextType>;
  DesignStudioProductGeneric?: DesignStudioProductGenericResolvers<ContextType>;
  DesignStudioProductEngagementRing?: DesignStudioProductEngagementRingResolvers<ContextType>;
  DesignStudioMeleeItem?: DesignStudioMeleeItemResolvers<ContextType>;
  DesignStudioProductWeddingRing?: DesignStudioProductWeddingRingResolvers<ContextType>;
  Quotation?: QuotationResolvers<ContextType>;
  QuotationManualSurcharge?: QuotationManualSurchargeResolvers<ContextType>;
  QuotationPercentageSurcharge?: QuotationPercentageSurchargeResolvers<ContextType>;
  QuotationEngagementRing?: QuotationEngagementRingResolvers<ContextType>;
  DesignStudioExternalSideStone?: DesignStudioExternalSideStoneResolvers<ContextType>;
  DesignStudioExternalCentreStone?: DesignStudioExternalCentreStoneResolvers<ContextType>;
  DesignStudioInternalSideStone?: DesignStudioInternalSideStoneResolvers<ContextType>;
  DesignStudioSideStone?: DesignStudioSideStoneResolvers<ContextType>;
  DesignStudioSideStoneItem?: DesignStudioSideStoneItemResolvers<ContextType>;
  DesignStudioSignatureStone?: DesignStudioSignatureStoneResolvers<ContextType>;
  DesignStudioEngagementRingMount?: DesignStudioEngagementRingMountResolvers<ContextType>;
  DesignStudioEngagementRingCentreStone?: DesignStudioEngagementRingCentreStoneResolvers<ContextType>;
  DesignStudioCentreStone?: DesignStudioCentreStoneResolvers<ContextType>;
  DesignStudioInternalCentreStone?: DesignStudioInternalCentreStoneResolvers<ContextType>;
  QuotationWeddingRing?: QuotationWeddingRingResolvers<ContextType>;
  CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponse?: CatalogueDesignStudioCheckoutWeddingRingNewCustomerResponseResolvers<ContextType>;
  CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponse?: CatalogueDesignStudioCheckoutWeddingRingExistingCustomerResponseResolvers<ContextType>;
  CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomer?: CatalogueDesignStudioCheckoutWeddingRingSuccessNewCustomerResolvers<ContextType>;
  CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomer?: CatalogueDesignStudioCheckoutWeddingRingSuccessExistingCustomerResolvers<ContextType>;
  CatalogueDesignStudioCheckoutJewelleryNewCustomerResponse?: CatalogueDesignStudioCheckoutJewelleryNewCustomerResponseResolvers<ContextType>;
  CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponse?: CatalogueDesignStudioCheckoutJewelleryExistingCustomerResponseResolvers<ContextType>;
  CatalogueDesignStudioCheckoutJewellerySuccessNewCustomer?: CatalogueDesignStudioCheckoutJewellerySuccessNewCustomerResolvers<ContextType>;
  CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomer?: CatalogueDesignStudioCheckoutJewellerySuccessExistingCustomerResolvers<ContextType>;
  CatalogueDesignStudioCheckoutEngagementRingSuccess?: CatalogueDesignStudioCheckoutEngagementRingSuccessResolvers<ContextType>;
  CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudio?: CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioResolvers<ContextType>;
  CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCart?: CatalogueDesignStudioCheckoutEngagementRingAddedToDesignStudioAndCartResolvers<ContextType>;
  AddToCartReadyToGoRingNewCustomerResponse?: AddToCartReadyToGoRingNewCustomerResponseResolvers<ContextType>;
  AddToCartReadyToGoRingExistingCustomerResponse?: AddToCartReadyToGoRingExistingCustomerResponseResolvers<ContextType>;
  AddToCartReadyToGoRingSuccessNewCustomer?: AddToCartReadyToGoRingSuccessNewCustomerResolvers<ContextType>;
  AddToCartReadyToGoRingSuccessExistingCustomer?: AddToCartReadyToGoRingSuccessExistingCustomerResolvers<ContextType>;
  StoneRecommendationNotFound?: StoneRecommendationNotFoundResolvers<ContextType>;
  StoneRecommendationNonSkuLabGrownItem?: StoneRecommendationNonSkuLabGrownItemResolvers<ContextType>;
  StoneRecommendationNonSkuGemstoneItem?: StoneRecommendationNonSkuGemstoneItemResolvers<ContextType>;
  StoneRecommendationNonSkuGemstone?: StoneRecommendationNonSkuGemstoneResolvers<ContextType>;
  StoneRecommendationsResponse?: StoneRecommendationsResponseResolvers<ContextType>;
  StoneRecommendationsResponseFailure?: StoneRecommendationsResponseFailureResolvers<ContextType>;
  StoneRecommendationsResponseSuccess?: StoneRecommendationsResponseSuccessResolvers<ContextType>;
  StoneRecommendationsPriceRange?: StoneRecommendationsPriceRangeResolvers<ContextType>;
  StoneRecommendationsNaturalDiamondFilters?: StoneRecommendationsNaturalDiamondFiltersResolvers<ContextType>;
  StoneRecommendationsPercentRange?: StoneRecommendationsPercentRangeResolvers<ContextType>;
  CatalogueDesignStudioEngagementRingValidationResult?: CatalogueDesignStudioEngagementRingValidationResultResolvers<ContextType>;
  CatalogueDesignStudioEngagementRingCentreStone?: CatalogueDesignStudioEngagementRingCentreStoneResolvers<ContextType>;
  GemsApiStone?: GemsApiStoneResolvers<ContextType>;
  DesignStudioEngagementRingError?: DesignStudioEngagementRingErrorResolvers<ContextType>;
  DesignStudioEngagementRingErrorShapeMismatch?: DesignStudioEngagementRingErrorShapeMismatchResolvers<ContextType>;
  DesignStudioEngagementRingErrorMinCaratWeight?: DesignStudioEngagementRingErrorMinCaratWeightResolvers<ContextType>;
  DesignStudioEngagementRingErrorMaxCaratWeight?: DesignStudioEngagementRingErrorMaxCaratWeightResolvers<ContextType>;
  DesignStudioEngagementRingFailure?: DesignStudioEngagementRingFailureResolvers<ContextType>;
  UserCustomerEngagementRingRecommendations?: UserCustomerEngagementRingRecommendationsResolvers<ContextType>;
  RingBuilderResolvedNewCustomer?: RingBuilderResolvedNewCustomerResolvers<ContextType>;
  RingBuilderResolvedExistingCustomer?: RingBuilderResolvedExistingCustomerResolvers<ContextType>;
  RingBuilderResolveResult?: RingBuilderResolveResultResolvers<ContextType>;
  RingBuilderResolvedFailure?: RingBuilderResolvedFailureResolvers<ContextType>;
  RingBuilderResolvedNewCustomerSuccess?: RingBuilderResolvedNewCustomerSuccessResolvers<ContextType>;
  RingBuilderResolvedExistingCustomerSuccess?: RingBuilderResolvedExistingCustomerSuccessResolvers<ContextType>;
  RingBuilder?: RingBuilderResolvers<ContextType>;
  RingBuilderFragment?: RingBuilderFragmentResolvers<ContextType>;
  RingBuilderMountFragment?: RingBuilderMountFragmentResolvers<ContextType>;
  RingBuilderCentreStoneFragment?: RingBuilderCentreStoneFragmentResolvers<ContextType>;
  RingBuilderCentreStone?: RingBuilderCentreStoneResolvers<ContextType>;
  MarketingDataResponse?: MarketingDataResponseResolvers<ContextType>;
  SearchEverywhereResponse?: SearchEverywhereResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  oneOf?: oneOfDirectiveResolver<any, any, ContextType>;
  isGranted?: isGrantedDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = MonolithTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".meshrc.js":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/Monolith/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const monolithTransforms = [];
const additionalTypeDefs = [] as any[];
const monolithHandler = new GraphqlHandler({
              name: "Monolith",
              config: {"endpoint":"https://staging.coderings.com/api/v3/graphql","operationHeaders":{"Cookie":"{context.headers['cookie']}","Origin":"{context.headers['origin']}","X-Blackfire-Query":"{context.headers['x-blackfire-query']}","X-Amzn-Trace-Id":"{context.headers['x-amzn-trace-id']}","X-Amzn-Cf-Id":"{context.headers['x-amzn-cf-id']}","X-Forwarded-For":"{context.headers['x-forwarded-for']}"},"timeout":60000,"batch":true},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Monolith"),
              logger: logger.child("Monolith"),
              importFn,
            });
sources[0] = {
          name: 'Monolith',
          handler: monolithHandler,
          transforms: monolithTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));