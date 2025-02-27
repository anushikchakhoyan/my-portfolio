import React, { useContext } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@ui/dialog';
import { Button } from '@ui/button';

import { ColorContext } from '@contexts/ColorContext';

type Color = {
    name: string;
    value: string;
};

const ColorPicker = () => {
    const { t } = useTranslation();
    const { dispatch } = useContext(ColorContext);

    const colors: Color[] = [
        { name: 'pink', value: '334.65 27.84% 50%' },
        { name: 'gold', value: '26.57 27.56% 49.8%' },
        { name: 'green', value: '153 60% 30%' },
        { name: 'blue', value: '189 100% 50%' },
    ];

    const handleColorChange = (color: Color) => {
        dispatch({ type: "SET_PRIMARY_COLOR", payload: color.value })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="hidden lg:block">
                    {t('chooseColorPallete')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="grid grid-cols-2 gap-4">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => handleColorChange(color)}
                            className={`bg-${color.name}-500 p-4 rounded-lg text-black`}
                        >
                            {color.name}
                        </button>
                    ))}
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button variant="secondary">
                            {t('save')}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ColorPicker;
