export {};

declare global {
  interface NetworkInformation {
    downlink: number;
    effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
    rtt: number;
    saveData: boolean;
  }

  interface Navigator {
    connection?: NetworkInformation;
  }
}
