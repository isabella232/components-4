/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import dateLocale from 'date-fns/locale/lt'
import type { I18nStateWithDates } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Išvalyti lauką',
  },
  AvatarButton: {
    'Profile Picture': 'Profilio paveikslėlis',
  },
  AvatarUser: {
    Avatar: 'Pseudoportretas',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Pasirinkti visi rodomi elementai: {{pageCount}}',
    AllTotalCountSelected: 'Pasirinkti visi elementai: {{totalCount}}',
    'Bulk Actions': 'Masiniai veiksmai',
    'Clear Selection': 'Išvalyti, kas pažymėta',
    SelectAllCountResults: 'Pasirinkti visus rezultatus: {{totalCount}}',
    SelectedCountOfTotalDisplayed:
      'Pasirinkta rodomų elementų: {{selectedItemCount}} iš {{pageCount}}',
  },
  CalendarNav: {
    'next month': 'kitas mėnuo',
    'previous month': 'ankstesnis mėnuo',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Varnelė maišyta',
  },
  Chip: {
    Delete: 'Ištrinti',
  },
  ColumnSelector: {
    Apply: 'Taikyti',
    Cancel: 'Atšaukti',
    'Select All': 'Pasirinkti: viską',
    'Select None': 'Pasirinkti: nieko',
    'Select columns to display': 'Pasirinkti norimus rodyti stulpelius',
  },
  ConfirmationDialog: {
    Cancel: 'Atšaukti',
    Confirm: 'Patvirtinti',
  },
  CopyToClipboard: {
    Copied: 'Nukopijuota',
    'Copy to Clipboard': 'Kopijuoti į iškarpinę',
  },
  DataTable: {
    'No Results': 'Rezultatų nėra',
  },
  DataTableItem: {
    Options: 'Parinktys',
  },
  FieldTimeSelect: {
    'Please enter a valid time': 'Įveskite teisingą laiką',
  },
  GetIntentLabel: {
    Error: 'Klaida',
    Inform: 'Informuoti',
    Success: 'Pavyko',
    Warning: 'Įspėjimas',
  },
  InputDate: {
    'Open calendar': 'Atidaryti kalendorių',
  },
  InputDateRange: {
    'End date': 'Pabaigos data',
    'Start date': 'Pradžios data',
  },
  InputFilters: {
    'Clear Filters': 'Išvalyti filtrus',
    'Filter List': 'Filtrų sąrašas',
    'bottom-start': 'iš apačios į viršų',
  },
  InputTimeSelect: {
    'Select time': 'Pasirinkti laiką',
  },
  MessageBar: {
    DismissIntent: 'Atmesti {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Uždaryti',
  },
  MonthPickerNav: {
    close: 'uždaryti',
    'next year': 'kiti metai',
    'previous year': 'ankstesni metai',
  },
  PageSize: {
    Display: 'Rodyti',
    of: 'iš',
  },
  Pagination: {
    'First page of results': 'Pirmas rezultatų puslapis',
    'Last page of results': 'Paskutinis rezultatų puslapis',
    'Next page of results': 'Kitas rezultatų puslapis',
    'Previous page of results': 'Ankstesnis rezultatų puslapis',
    of: 'iš',
  },
  PanelHeader: {
    CloseTitle: 'Uždaryti {{title}}',
  },
  PopoverFooter: {
    Done: 'Atlikta',
  },
  PromptDialog: {
    Cancel: 'Atšaukti',
    Save: 'Išsaugoti',
  },
  RangeSlider: {
    'Maximum Value': 'Didžiausia vertė',
    'Minimum Value': 'Mažiausia vertė',
  },
  RequiredStar: {
    required: 'reikalinga',
  },
  SelectOptions: {
    Loading: 'Įkeliama',
    'No options': 'Parinkčių nėra',
  },
  TabList: {
    Tabs: 'Skirtukai',
  },
}

export const ltLT: I18nStateWithDates = {
  dateLocale,
  locale: 'lt-LT',
  resources: { 'lt-LT': resources },
}
