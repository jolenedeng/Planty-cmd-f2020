export interface Plant {
    scientificName: string;
    commonName: string;
    provinceState: string;
    /**
     * Yes/empty
     */
    isAdaptedToCoarseSoil: string;
    /**
     * Yes/empty
     */
    isAdaptedToMediumSoil: string;
    /**
     * Yes/empty
     */
    isAdaptedToFineSoil: string;
    moistureUse: string;
    precipitationMin: string;
    precipitationMax: string;
    shadeTolerance: string;
    temperatureMin: string;
    imageUrls?: string[];
}
