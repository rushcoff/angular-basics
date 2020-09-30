import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface City {
  key: string;
  value: string;
}

interface Category {
  label: string;
  key: number;
  value: boolean;
}

interface RoomsCount {
  label: string;
  key: number;
  value: boolean;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  form: FormGroup;

  get citiesList(): City[] {
    return [
      { key: 'Все города', value: '' },
      { key: 'Москва', value: 'mocsow' },
      { key: 'Тюмень', value: 'tyumen' },
    ];
  }

  get categoriesList(): Category[] {
    return [
      { label: 'квартира', key: 8, value: false },
      { label: 'дом', key: 4, value: false },
      { label: 'участок', key: 5, value: false },
      { label: 'дом с участком', key: 10, value: false },
      { label: 'дача', key: 11, value: false },
      { label: 'коммерческая', key: 9, value: false },
    ];
  }

  get roomsCountList(): RoomsCount[] {
    return [
      { label: '1', key: 1, value: false },
      { label: '2', key: 2, value: false },
      { label: '3', key: 3, value: false },
      { label: '4', key: 4, value: false },
      { label: '5', key: 5, value: false },
    ];
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      city: [''],
      category: this.fb.group(
        this.categoriesList.reduce((acc, item) => {
          acc[item.key] = [item.value];
          return acc;
        }, {})
      ),
      roomsCount: this.fb.group(
        this.roomsCountList.reduce((acc, item) => {
          acc[item.key] = [item.value];
          return acc;
        }, {})
      ),
    });

    this.onFormValueChanges();
  }

  onFormValueChanges(): void {
    this.form.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
