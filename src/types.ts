export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  iconName: 'instagram' | 'linkedin' | 'github' | 'mail';
  badge?: string;
  highlight?: boolean;
}
