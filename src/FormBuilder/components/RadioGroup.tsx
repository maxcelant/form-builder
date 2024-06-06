import { Grid, FormControl, Box, FormControlLabel, Radio, RadioGroup as RG } from "@material-ui/core";
import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import FormContext from "../FormContext";
import { RadioGroupProps } from "../types";


export function FormRadioGroup({ name, items, options, size = 4, direction = 'column' }: RadioGroupProps) {
  const { control, schema } = useContext(FormContext);
  if (!schema) return null;
  if (!(name in schema.fields)) {
    throw new Error(`Invalid field name: ${name.toString()}`);
  }

  return (
    <Grid item xs={12} sm={size} md={size} style={{ margin: '10px 0px' }}>
      <FormControl variant="outlined" fullWidth required>
        <Controller name={name} control={control} render={({ field }) => (
          <RG aria-label={name} {...field} {...options}>
            <Box display="flex" flexDirection={direction}>
              {items.map((item: any) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </Box>
          </RG>
        )} />
      </FormControl>
    </Grid>
  )
}