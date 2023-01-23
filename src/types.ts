export interface GrowthCenter {
  id: number;
  name: string;
  description: string | null;
  manager_image: string | null;
  rules: string | null;
  manager_name: string;
  address: string | null;
  latitude: string | null;
  longitude: string | null;
  cordinates: number[];
}
export interface ICourse {
  id: number;
  name: string;
  poster?: string;
  start_date: string;
  duration: string;
  description?: string;
}
export interface ICore {
  id: number;
  core_type: number | null;
  name: string;
  image: string | null;
  founder: string;
  description: string | null;
  is_active: boolean;
  is_Knowledge_base: boolean;
  growth_center: number;
}
export interface IEvent {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  growth_center: number;
  image: string;
}
export interface INews {
  id: number;
  title: string;
  description: string;
  growth_center: number;
  image: string;
}
