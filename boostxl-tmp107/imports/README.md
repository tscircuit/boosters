# Imported and sourced parts

| References | Function | MPN | JLCPCB | Footprint decision |
|---|---|---|---|---|
| J1, J2 | 2x10 female BoosterPack socket | SSQ-110-03-T-D | C5379997 | Exact imported EasyEDA/JLCPCB footprint retained; best generic Footprinter match was 9.93% IoU. |
| J3 | Vertical 2x3 mode header | PZ254V-12-6P | C492420 | Exact imported EasyEDA/JLCPCB footprint retained; best generic Footprinter match was 10.82% IoU. |
| U1 | Open-drain buffer | SN74LVC1G07DBVR | C7829 | Converted to `dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)` at 99.54% copper IoU. |
| U2-U4 | Daisy-chain temperature sensor | TMP107BIDR | C2870479 | Converted to `soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)` at 100.00% copper IoU. |
| R1 | 3.3 kΩ, 0603 | 0603WAF3301T5E | C22978 | Native resistor, `0603`. |
| R2 | 10 kΩ, 0603 | CQ03WAF1002T5E | C516551 | Native resistor, `0603`. |
| C1-C4 | 100 nF, 0603 | GRM188R71E104KA01D | C77050 | Native capacitor, `0603`. |

The JLCPCB catalog contains the exact TMP107BIDR as C2870479, but the EasyEDA model endpoint did not expose that SKU to `tsci import`. Its local model assets were therefore based on the pin-compatible SOIC-8 record C2870960; the production identity and supplier metadata remain the exact TMP107BIDR/C2870479.

The TypeScript imports reference 3D models from the tscircuit model CDN. Local `.step` and `.obj` files are intentionally not stored in this repository.
