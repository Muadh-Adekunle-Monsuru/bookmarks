import { create } from 'zustand';

type DataStore = {
	data: Group[];
	setData: (val: Group[]) => void;
};

export type Group = {
	groupName?: string;
	links?: Item[];
};

type Item = {
	name?: string;
	href?: string;
	addedDate?: string;
	description?: string;
};

export const useDataStore = create<DataStore>((set) => ({
	data: [],
	setData: (values) => {
		set((state) => ({ data: values }));
	},
}));
