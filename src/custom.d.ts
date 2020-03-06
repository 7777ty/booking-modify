type RootState={
    output: string;
    selectedTag: string;
    type: string;
    notes: string;
    recordList: recordItem[];
}
type recordItem={
    tag: string;
    notes: string;
    type: string;
    amount: number;
    createAt?: string;
}

