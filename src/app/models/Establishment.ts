export default interface Establishment {
  id: string;
  index: number;
  guid: string;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  registered: string;
  latitude: string;
  longitude: string;

  city?: string;
  bank?: string;
  accountType?: string;
  document?: string;
  agency?: string;
  agencyDigit?: string;
  account?: string;
  accountDigit?: string;
  autoWithdrawal?: string;
}
