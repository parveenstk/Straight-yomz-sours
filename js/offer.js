import { useState } from './useState.js'

// hide & show lowSugar box & sugarFree box
const lowSugarSelector = document.getElementById('lowSugar-selector');
const sugarFreeSelector = document.getElementById('sugarFree-selector');
const lowSugarBox = document.querySelector('.lowSugar')
const sugarFreeBox = document.querySelector('.freeSugar')

lowSugarSelector.addEventListener('click', () => {
    lowSugarBox.classList.add('show');
    sugarFreeBox.classList.remove('show');
    sugarFreeBox.classList.add('hide');
})

sugarFreeSelector.addEventListener('click', () => {
    sugarFreeBox.classList.add('show');
    lowSugarBox.classList.remove('show');
    lowSugarBox.classList.add('hide');
})

// choose offer ( Low Sugar )
const originalPercentage = 25;
const originalPerKidPrice = 66.99;
const originalPacks = 28;
const originalGummies = 168;

const [getofferPrcnt, setofferPrcnt] = useState(25, 'offerPrcnt');
const [getPricePerKid, setPricePerKid] = useState(50.24, 'price-perKid');
const [getPricePerDay, setPricePerDay] = useState(1.79, 'price-perDay');
const [getPacks, setPacks] = useState(28, 'perPack');
const [getPerPackGummies, setPerPackGummies] = useState(168, 'perPack-gummies')

const kidsSelector = document.getElementsByName('btnradio');
kidsSelector.forEach(selector => {
    selector.addEventListener('click', (e) => {
        const val = +e.target.value;
        setofferPrcnt(originalPercentage - 1 + val)
        setPricePerKid((originalPerKidPrice - ((getofferPrcnt() / 100) * originalPerKidPrice)).toFixed(2));
        setPricePerDay((getPricePerKid() / 28).toFixed(2));
        setPacks(originalPacks * val)
        setPerPackGummies(originalGummies * val);
    })
})

// choose offer ( Sugar Free )
const originalPercentage2 = 25;
const originalPerKidPrice2 = 66.99;
const originalPacks2 = 28;
const originalGummies2 = 168;

const [getofferPrcnt2, setofferPrcnt2] = useState(25, 'offerPrcnt2');
const [getPricePerKid2, setPricePerKid2] = useState(50.24, 'price-perKid2');
const [getPricePerDay2, setPricePerDay2] = useState(1.79, 'price-perDay2');
const [getPacks2, setPacks2] = useState(28, 'perPack2');
const [getPerPackGummies2, setPerPackGummies2] = useState(168, 'perPack-gummies2');

const kidsSelector2 = document.getElementsByName('btnradio2');
kidsSelector2.forEach(selector => {
    selector.addEventListener('click', (e) => {
        const val = +e.target.value;
        setofferPrcnt2(originalPercentage2 - 1 + val);
        setPricePerKid2((originalPerKidPrice2 - ((getofferPrcnt2() / 100) * originalPerKidPrice2)).toFixed(2));
        setPricePerDay2((getPricePerKid2() / 28).toFixed(2));
        setPacks2(originalPacks2 * val);
        setPerPackGummies2(originalGummies2 * val);
    });
});
