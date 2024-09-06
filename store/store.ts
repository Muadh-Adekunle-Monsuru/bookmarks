import { create } from 'zustand';

type DataStore = {
	data: Group[];
	setData: (val: Group[]) => void;
	streaming: boolean;
	setStreaming: () => void;
	historyData: Group[];
	setHistoryData: (val: Group[]) => void;
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
	historyData: [],
	streaming: false,
	setStreaming: () => {
		set((state) => ({ streaming: !state.streaming }));
	},
	setData: (values) => {
		set((state) => ({ data: values }));
	},
	setHistoryData: (values) => {
		set((state) => ({ historyData: values }));
	},
}));
