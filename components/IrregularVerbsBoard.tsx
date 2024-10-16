import { VerbType as VerbType } from "@/app/page";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Checkbox } from "./ui/checkbox";

export default function VerbsBoard ({verbs}:{verbs:VerbType[]})  {

    return (
        <Table>
          <TableCaption>A list of common irregular verbs in English</TableCaption>
          <TableHeader>
            <TableRow>
            <TableHead >Selected</TableHead>
              <TableHead className="w-[100px]">Verb</TableHead>
              <TableHead>Past Simple</TableHead>
              <TableHead>Past Participle</TableHead>
              <TableHead className="text-right">French Translation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {verbs.map((verb) => (
              <TableRow key={verb.verb}>
                <TableCell>
                    <Checkbox
                      checked={true}
                    />
                  </TableCell>
                <TableCell className="font-medium">{verb.verb}</TableCell>
                <TableCell>{verb.pastSimple}</TableCell>
                <TableCell>{verb.pastParticiple}</TableCell>
                <TableCell className="text-right">{verb.frenchTranslation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );

}