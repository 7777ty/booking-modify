type RootState={
    output: string;
    selectedTag: string;
    type: string;
    notes: string;
    recordList: recordItem[];
    budget: number|null;
}
type recordItem={
    tag: string;
    notes: string;
    type: string;
    amount: number;
    createAt?: string;
}

